<script lang="ts">
  import { onMount } from 'svelte';
  import RoutePanel from '$lib/components/panels/RoutePanel.svelte';

  export let data;

  let ready = false;

  let routes: Route[];
  let route: Route;

  let selectedRouteId = data.routeId;
  let selectedRoute: Route;

  onMount(async () => {
    routes = (await fetch('/data/routes.json').then((res) => res.json())) ?? [];

    selectedRoute = routes.find((route) => route.id === selectedRouteId) ?? routes[0];

    ready = true;
  });

  $: if (ready) {
    selectedRoute = routes.find((route) => route.id === selectedRouteId) ?? routes[0];
  }
</script>

{#if ready}
  <div class="mx-5 my-5 flex items-center">
    <label for="route">Route: </label>
    <select
      name="route"
      id="route"
      class="bg-slate-300 ml-2 p-1 w-full rounded-md"
      bind:value={selectedRouteId}
      on:change={() => (window.location.href = `/route/${selectedRouteId}`)}
    >
      {#each routes as route}
        <option value={route.id}>{route.name}</option>
      {/each}
    </select>
  </div>

  <RoutePanel route={selectedRoute} />
{/if}
