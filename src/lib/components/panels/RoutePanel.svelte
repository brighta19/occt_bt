<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Header from '../Header.svelte';

  const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const DIRECTIONS = ['inbound', 'outbound'];

  const currentDay = DAYS[new Date().getDay()];

  export let route: Route;

  let dataLoaded = false;
  let allStops: Stop[] = [];
  let relatedSchedules: Schedule[] = [];

  let selectedDirection = 'outbound';
  let selectedDay = currentDay;

  let currentSchedule: Schedule | undefined;
  let daysOfCurrentSchedule: string[] = [];

  let stops: Stop[] = [];
  let timings: number[] = [];
  let departures: number[] = [];

  let updaterBool = true;

  async function fetchData() {
    let stops: Stop[] = (await fetch('/data/stops.json').then((res) => res.json())) ?? [];
    let schedules: Schedule[] =
      (await fetch('/data/schedules.json').then((res) => res.json())) ?? [];

    return { stops, schedules };
  }

  function getFirstStopName() {
    return stops.length > 0 ? stops[0].name : '';
  }

  function doesRouteHaveTwoDirections(route: Route) {
    return route.direction.inbound !== null && route.direction.outbound !== null;
  }

  function doesRouteHaveScheduleForDay(day: string) {
    return (
      (route.direction.inbound?.schedules.some((routeSchedule) =>
        routeSchedule.days.some((d) => day == d)
      ) ||
        route.direction.outbound?.schedules.some((routeSchedule) =>
          routeSchedule.days.some((d) => day == d)
        )) ??
      false
    );
  }

  function isDayInCurrentSchedule(day: string) {
    return daysOfCurrentSchedule.some((scheduleDay) => scheduleDay === day);
  }

  function isCurrentDayInCurrentSchedule() {
    return daysOfCurrentSchedule.some((scheduleDay) => scheduleDay === currentDay);
  }

  function toTime(num: number) {
    const minutes = num % 100;
    const hours24 = Math.floor(num / 100);

    let hours12Text = `${hours24}`;
    let minutesText = `${minutes}`.padStart(2, '0');
    let meridiemText = 'AM';

    if (hours24 === 0) {
      hours12Text = '12';
    } else if (hours24 > 11) {
      hours12Text = `${hours24 > 12 ? hours24 - 12 : hours24}`;
      meridiemText = 'PM';
    }

    return `${hours12Text}:${minutesText} ${meridiemText}`;
  }

  function hasTimePassed(num: number) {
    const minutes = num % 100;
    const hours24 = Math.floor(num / 100);
    const date = new Date();
    date.setHours(hours24, minutes, 0, 0);

    const currentDate = new Date();

    return date.getTime() < currentDate.getTime();
  }

  function update() {
    let routeSchedules =
      selectedDirection === 'inbound' ? route.direction.inbound : route.direction.outbound;

    if (routeSchedules === null) return;

    let byRouteScheduleAndSelectedDay = (schedule: Schedule) => {
      let isCurrentDaySchedule = (routeSchedule: RouteSchedule) => {
        let isRouteSchedule = routeSchedule.schedule_id === schedule.id;
        let isSelectedDay = (day: string) => day === selectedDay;
        return isRouteSchedule && routeSchedule.days.some(isSelectedDay);
      };
      return routeSchedules?.schedules.some(isCurrentDaySchedule);
    };

    currentSchedule = relatedSchedules.find(byRouteScheduleAndSelectedDay);

    if (currentSchedule === undefined) return;

    let byRouteSchedule = (routeSchedule: RouteSchedule) =>
      routeSchedule.schedule_id === currentSchedule?.id ?? false;

    daysOfCurrentSchedule = routeSchedules.schedules.find(byRouteSchedule)?.days ?? [];

    let toStop = (stopId: number) => allStops.find((stop) => stop.id === stopId)!;

    stops = currentSchedule.stop_ids.map(toStop);
    departures = currentSchedule.departure_times;
    timings = currentSchedule.minutes_from_first_stop;
  }

  function updateDirection(direction: string) {
    selectedDirection = direction;
    update();
  }

  function updateDay(day: string) {
    selectedDay = day;
    update();
  }

  onMount(async () => {
    let { stops, schedules } = await fetchData();

    let byRoute = (schedule: Schedule) => {
      return (
        (route.direction.inbound?.schedules.some((routeSchedule) => {
          return routeSchedule.schedule_id === schedule.id;
        }) ||
          route.direction.outbound?.schedules.some((routeSchedule) => {
            return routeSchedule.schedule_id === schedule.id;
          })) ??
        false
      );
    };

    relatedSchedules = schedules.filter(byRoute);
    dataLoaded = true;
    allStops = stops;

    update();

    let intervalId = setInterval(() => (updaterBool = !updaterBool), 1000 * 30);
    onDestroy(() => clearInterval(intervalId));
  });

  $: if (dataLoaded) update();
</script>

<Header name="Route" />

<div class="flex pb-5 mx-5 border-b border-b-gray-500 flex-col">
  <div class="flex items-center w-full">
    <div class="w-fit flex flex-col items-center">
      <div
        style:--color={route.color}
        class="bg-[--color] w-10 h-10 rounded-full p-1.5 center flex items-center justify-center"
      >
        <i class="text-white fa-solid fa-route" aria-hidden="true" />
      </div>
    </div>
    <div class="ml-5 w-full">
      <p class="text-gray-500">Name</p>
      <p class="text-xl">{route.name}</p>
    </div>
  </div>
</div>

<div style:--route-color={route.color} class="flex pb-5 mx-5 border-b-gray-500 flex-col">
  <div class="mt-2 pt-2">
    <p class="text-xl mb-1">Schedule</p>
    <div class="mt-4">
      {#if doesRouteHaveTwoDirections(route)}
        <div class="flex gap-2">
          {#each DIRECTIONS as direction}
            <button
              type="button"
              style="text-shadow: 0 0 2px rgba(0,0,0,0.2)"
              class="p-1 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-800 capitalize"
              class:btn-selected={direction === selectedDirection}
              on:click={() => updateDirection(direction)}
            >
              <i
                class="fa-solid fa-circle-arrow-{direction === 'inbound' ? 'down' : 'up'}"
                aria-hidden="true"
              />
              {direction}
            </button>
          {/each}
        </div>
      {/if}
      <div class="flex mt-2 gap-2">
        {#key daysOfCurrentSchedule}
          {#each DAYS as day}
            <button
              type="button"
              style="text-shadow: 0 0 2px rgba(0,0,0,0.2)"
              class="p-1 w-full bg-gray-100 rounded-md text-gray-800 border border-gray-600 disabled:text-gray-300 disabled:border-gray-300"
              class:border-dashed={day === currentDay}
              class:btn-selected={isDayInCurrentSchedule(day)}
              disabled={!doesRouteHaveScheduleForDay(day)}
              on:click={() => updateDay(day)}
            >
              {day[0].toUpperCase()}
            </button>
          {/each}
        {/key}
      </div>
      <p class="mt-4 text-center text-slate-600">
        The times for the stops besides the first
        {#key currentSchedule}
          {#if currentSchedule}
            (<em>{getFirstStopName()}</em>)
          {/if}
        {/key}
        are probably wrong. 🙃
      </p>
      {#if stops.length === 0}
        <p class="mt-4 text-center border p-2">
          There are no schedules for <span class="capitalize">{selectedDay}</span>.
        </p>
      {:else}
        <div class="mt-4 border w-full flex overflow-x-auto snap-x">
          {#each stops as stop, i}
            <div class="flex flex-col min-w-max text-center striped relative snap-start">
              <div class="p-2 border-b">
                <a href="/stop/{stop.id}" class="text-blue-400 underline"> {stop.name}</a>
              </div>
              {#key updaterBool}
                {#each departures as departure}
                  <div
                    class="p-2"
                    class:text-gray-400={isCurrentDayInCurrentSchedule() &&
                      hasTimePassed(departure + (timings[i] ?? 0))}
                  >
                    {toTime(departure + (timings[i] ?? 0))}
                  </div>
                {/each}
              {/key}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .striped div:nth-child(even) {
    background-color: #f3f3f3;
  }

  button.btn-selected {
    @apply bg-[--route-color] text-white shadow-inner;
  }
</style>
