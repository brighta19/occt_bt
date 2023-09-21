<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '../Header.svelte';

  export let bus: Bus;

  let dataLoaded = false;
  let route: Route;

  async function fetchData() {
    let routes: Route[] = (await fetch('/data/routes.json').then((res) => res.json())) ?? [];

    return { routes };
  }

  function toTimeRemaining(epochTime: number) {
    let date = new Date(epochTime);
    let minutes = date.getMinutes();

    if (minutes === 0) {
      return `At Stop`;
    }
    if (minutes < 60) {
      return `${minutes} min.`;
    }
    return minutes;
  }

  onMount(async () => {
    let { routes } = await fetchData();

    dataLoaded = true;
    route = routes.find((route) => route.id === bus.route_id)!;

    console.log(routes, bus.route_id);
  });
</script>

<Header name="Bus" />

<div class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col">
  <div class="flex items-center w-full">
    <div class="w-fit flex flex-col items-center">
      <div class="bg-slate-500 w-[25px] h-[25px] rounded-md" />
      <p class="text-center text-xs">#{bus.id}</p>
    </div>
    <div class="ml-5 w-full">
      <p class="text-gray-500 mb-1">Route</p>
      {#if dataLoaded}
        <a
          href="/route/{route.id}"
          style:--bg-color={route.color}
          class="block border-2 rounded-md border-transparent hover:border-black focus:border-black bg-[--bg-color] py-1 px-3"
        >
          <p class="text-white text-xl route-name">{route.name}</p>
          <p class="text-white text-sm">{bus.direction === 'inbound' ? 'Inbound' : 'Outbound'}</p>
        </a>
      {/if}
    </div>
  </div>
</div>

<!-- <div class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col">
  <div class="ml-2 pt-2">
    <p class="text-xl mb-1">Status</p>
    <div class="border-2 border-gray-200 p-2">
      <p
        class:delayed={bus.status.delayed}
        class:text-green-500={!bus.status.delayed}
        class:text-red-500={bus.status.delayed}
      >
        {bus.status.delayed ? 'Behind ' : 'On '} Schedule
      </p>
    </div>
  </div>
</div>

<div class="flex pb-5 mx-5 flex-col">
  <div class="ml-2 pt-2">
    <p class="text-xl mb-1">Next stops</p>
    <div class="my-4">
      {#each bus.stops as stop}
        <div class="rounded-md bg-gray-200 flex justify-between px-4 py-2 mb-4 items-center">
          <p>{stop.name}</p>
          <div>
            <p class="text-right text-xs text-gray-500">ETA</p>
            <p>{toTimeRemaining(stop.eta)}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div> -->

<style>
  a:hover .route-name,
  a:focus .route-name {
    text-decoration: underline;
  }
</style>
