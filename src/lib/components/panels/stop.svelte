<script lang="ts">
  type IncomingBus = {
    id: number;
    route: Route;
    direction: string;
    eta: number;
  };

  import { onMount } from 'svelte';
  import Header from '../header.svelte';

  export let stop: Stop;
  export let data: { buses: Bus[] };

  let connectedRoutes: Route[] = [];

  let incomingBuses: IncomingBus[] = [];

  function getRouteColor(route: Route) {
    return (
      connectedRoutes.find((connectedRoute) => connectedRoute.id === route.id)?.color ?? '#000000'
    );
  }

  function doesRouteHaveTwoDirections(route: Route) {
    return route.direction.inbound !== null && route.direction.outbound !== null;
  }

  function getIncomingBuses(): IncomingBus[] {
    return data.buses.map((bus) => ({
      id: bus.id,
      route: connectedRoutes.find((route) => route.id === bus.route_id)!,
      direction: bus.direction,
      eta: bus.next_stop_eta
    }));
  }

  onMount(async () => {
    // grab data
    let routes: Route[] = (await fetch('/data/routes.json').then((res) => res.json())) ?? [];
    let schedules: Schedule[] =
      (await fetch('/data/schedules.json').then((res) => res.json())) ?? [];

    // get schedules that contains our selected stop
    let relatedSchedules = schedules.filter((schedule) =>
      schedule.stop_ids.some((stop_id) => stop_id === stop.id)
    );

    // get routes that use one of our related schedules
    connectedRoutes = routes.filter(
      (route) =>
        route.direction.inbound?.schedules.some((routeSchedule) =>
          relatedSchedules.some((schedule) => schedule.id === routeSchedule.schedule_id)
        ) ||
        route.direction.outbound?.schedules.some((routeSchedule) =>
          relatedSchedules.some((schedule) => schedule.id === routeSchedule.schedule_id)
        )
    );

    // get incoming buses
    incomingBuses = getIncomingBuses();
  });

  function toTimeRemainingText(epochTime: number) {
    const date = new Date(epochTime);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    let text = '';

    if (hours > 0) {
      text += `${hours} hr.`;
      text += minutes > 0 ? ` ${minutes} min.` : '';
    } else {
      text += minutes > 0 ? `${minutes} min.` : 'At Stop';
    }

    return text;
  }
</script>

<Header>Stop</Header>

<div class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col">
  <div class="flex items-center w-full">
    <div class="w-fit flex flex-col items-center">
      <div class="bg-sky-500 w-[25px] h-[25px]" />
      <p class="text-center text-xs">#{stop.id}</p>
    </div>
    <div class="ml-5 w-full">
      <p class="text-gray-500">Name</p>
      <p class="text-2xl">{stop.name}</p>
    </div>
  </div>
</div>

<div class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col">
  <div class="ml-2 pt-2">
    <p class="text-xl mb-1">Incoming Buses</p>
    <div class="mt-4">
      {#each incomingBuses as bus}
        <div
          style="--bg-color: {getRouteColor(bus.route)}"
          class="bg-[var(--bg-color)] rounded-md px-3 py-2 mb-2 relative text-white shadow-slate-200 shadow-md"
        >
          <div class="absolute top-0 right-1">
            <p class="text-5xl font-bold opacity-30">
              {bus.route.abbreviation}
            </p>
          </div>
          <div class="flex relative">
            <div class="text-3xl">
              <i class="fa-solid fa-bus" aria-hidden="true" />
            </div>
            <div class="pl-2 w-full">
              <div class="flex justify-between" style="text-shadow: 0 2px 5px #888">
                <div>
                  <p class="text-2xl mb-1">{bus.route.name}</p>
                  {#if doesRouteHaveTwoDirections(bus.route)}
                    <p class="text-sm">{bus.direction === 'inbound' ? 'Inbound' : 'Outbound'}</p>
                  {/if}
                </div>
                <p class="font-bold text-right mt-1 ml-2 min-w-max">
                  {toTimeRemainingText(bus.eta ?? 0)}
                </p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="flex pb-5 mx-5 flex-col">
  <div class="ml-2 pt-2">
    <p class="text-xl mb-1">Connected Routes</p>
    <div class="mt-4">
      {#each connectedRoutes as route}
        <a
          href="/route?id={route.id}"
          class="inline-flex rounded-xl hover:bg-white hover:underline
                    focus:bg-white focus:underline bg-gray-200 py-1 px-2 mb-2 mr-2 border-[1px] border-black items-center shadow-slate-200 shadow-md"
        >
          <div
            style="--color: {route.color}"
            class="rounded-full bg-[var(--color)] w-[15px] h-[15px] mr-1"
          />
          <p class="text-sm">{route.name}</p>
        </a>
      {/each}
    </div>
  </div>
</div>
