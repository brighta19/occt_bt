<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '../Header.svelte';

  const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const DIRECTIONS = ['inbound', 'outbound'];

  const currentDay = DAYS[new Date().getDay()];

  export let route: Route;

  let dataLoaded = false;
  let selectedDirection = 'outbound';
  let selectedDay = currentDay;
  let relatedSchedules: Schedule[] = [];
  let allStops: Stop[] = [];

  async function fetchData() {
    let stops: Stop[] = (await fetch('/data/stops.json').then((res) => res.json())) ?? [];
    let schedules: Schedule[] =
      (await fetch('/data/schedules.json').then((res) => res.json())) ?? [];

    return { stops, schedules };
  }

  function doesRouteHaveTwoDirections(route: Route) {
    return route.direction.inbound !== null && route.direction.outbound !== null;
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

  let stopNames: string[] = [];
  let timings = [0, 3, 4, 5, 6, 7, 8];
  let departures: number[] = [];

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
  });

  $: if (dataLoaded) update();

  function update() {
    let routeDirection =
      selectedDirection === 'inbound' ? route.direction.inbound : route.direction.outbound;
    if (routeDirection === null) return;

    let currentSchedule = relatedSchedules.find((schedule) => {
      return routeDirection?.schedules.some((routeSchedule) => {
        return (
          routeSchedule.days.some((day) => day === selectedDay) &&
          routeSchedule.schedule_id === schedule.id
        );
      });
    });
    if (currentSchedule === undefined) return;

    stopNames = currentSchedule.stop_ids.map(
      (stopId) => allStops.find((stop) => stop.id === stopId)?.name ?? ''
    );
    departures = currentSchedule.departure_times;
    timings = currentSchedule.minutes_from_first_stop;
  }
</script>

<Header name="Route" />

<div class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col">
  <div class="flex items-center w-full">
    <div class="w-fit flex flex-col items-center">
      <div
        style:--color={route.color}
        class="bg-[--color] w-10 h-10 rounded-full p-1.5 center flex items-center justify-center"
      >
        <i class="text-white text-md fa-solid fa-route" aria-hidden="true" />
      </div>
    </div>
    <div class="ml-5 w-full">
      <p class="text-gray-500">Name</p>
      <p class="text-xl">{route.name}</p>
    </div>
  </div>
</div>

<div
  style:--route-color={route.color}
  class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col"
>
  <div class="ml-2 pt-2">
    <p class="text-xl mb-1">Schedule</p>
    <div class="mt-4">
      {#if doesRouteHaveTwoDirections(route)}
        <div class="flex gap-2">
          {#each DIRECTIONS as direction}
            <button
              type="button"
              style="text-shadow: 0 0 2px rgba(0,0,0,0.2)"
              class="p-1 w-full bg-gray-200 rounded-md text-gray-800 border border-gray-800 capitalize"
              class:btn-pressed={direction === selectedDirection}
              on:click={() => {
                selectedDirection = direction;
                update();
              }}
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
        {#each DAYS as day}
          <button
            type="button"
            style="text-shadow: 0 0 2px rgba(0,0,0,0.2)"
            class="p-1 w-full bg-gray-200 rounded-md text-gray-800 border border-gray-600"
            class:btn-pressed={day === selectedDay}
            on:click={() => {
              selectedDay = day;
              update();
            }}
          >
            {day[0].toUpperCase()}
          </button>
        {/each}
      </div>
      <p class="mt-4 text-center text-slate-600">
        The times for the stops besides the first (<em
          >{stopNames.length > 0 ? stopNames[0] : ''}</em
        >) are very likely wrong 🙃
      </p>
      <div class="mt-4 border max-w-min flex overflow-x-auto snap-x">
        {#each stopNames as stop, i}
          <div class="flex flex-col min-w-max text-center striped relative snap-start">
            <div class="p-2 border-b">{stop}</div>
            {#each departures as departure}
              <div class="p-2">{toTime(departure + (timings[i] ?? 0))}</div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .striped div:nth-child(even) {
    background-color: #f3f3f3;
  }

  button.btn-pressed {
    @apply bg-[--route-color] text-white shadow-inner;
  }
</style>
