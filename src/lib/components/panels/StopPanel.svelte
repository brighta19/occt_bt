<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '../Header.svelte';
  import BusEtaCard from '../BusEtaCard.svelte';
  import RouteTag from '../RouteTag.svelte';

  export let stop: Stop;
  export let buses: Bus[];

  let dataLoaded = false;
  let selectedStop = stop;
  let incomingBuses: Bus[] = [];
  let connectedRoutes: Route[] = [];

  async function fetchData() {
    let routes: Route[] = (await fetch('/data/routes.json').then((res) => res.json())) ?? [];
    let schedules: Schedule[] =
      (await fetch('/data/schedules.json').then((res) => res.json())) ?? [];

    return { routes, schedules };
  }

  function getRoute(routeId: number) {
    return connectedRoutes.find((route) => route.id === routeId)!;
  }

  function generateIsARelatedScheduleFunction(relatedSchedule: Schedule) {
    return (routeSchedule: RouteSchedule) => routeSchedule.schedule_id === relatedSchedule.id;
  }

  function generateIsUsedByRouteFunction(route: Route) {
    return (relatedSchedule: Schedule) => {
      let isARelatedSchedule = generateIsARelatedScheduleFunction(relatedSchedule);
      return (
        route.direction.inbound?.schedules.some(isARelatedSchedule) ||
        route.direction.outbound?.schedules.some(isARelatedSchedule)
      );
    };
  }

  onMount(async () => {
    let { routes, schedules } = await fetchData();
    let relatedSchedules: Schedule[] = [];

    let byStopId = (schedule: Schedule) => {
      let isSelectedStop = (stopId: number) => stopId === selectedStop.id;
      return schedule.stop_ids.some(isSelectedStop);
    };

    let byRelatedSchedule = (route: Route) => {
      let isUsedByRoute = generateIsUsedByRouteFunction(route);
      return relatedSchedules.some(isUsedByRoute);
    };

    dataLoaded = true;
    incomingBuses = buses;
    relatedSchedules = schedules.filter(byStopId);
    connectedRoutes = routes.filter(byRelatedSchedule);
  });
</script>

<Header name="Stop" />

<div class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col">
  <div class="flex items-center w-full">
    <div class="w-fit flex flex-col items-center">
      <div class="bg-sky-500 w-[25px] h-[25px] rounded-md" />
      <p class="text-center text-xs">#{selectedStop.id}</p>
    </div>
    <div class="ml-5 w-full">
      <p class="text-gray-500">Name</p>
      <p class="text-2xl">{selectedStop.name}</p>
    </div>
  </div>
</div>

<div class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col">
  <div class="ml-2 pt-2">
    <p class="text-xl mb-1">Incoming Buses</p>
    {#if dataLoaded}
      <div class="mt-4">
        {#if incomingBuses.length === 0}
          <p class="text-slate-600 text-center">No running buses at this time.</p>
        {:else}
          {#each incomingBuses as bus}
            <BusEtaCard {bus} route={getRoute(bus.route_id)} />
          {/each}
        {/if}
      </div>
    {/if}
  </div>
</div>

<div class="flex pb-5 mx-5 flex-col">
  <div class="ml-2 pt-2">
    <p class="text-xl mb-1">Connected Routes</p>
    <div class="mt-4">
      {#each connectedRoutes as route}
        <RouteTag {route} />
      {/each}
    </div>
  </div>
</div>
