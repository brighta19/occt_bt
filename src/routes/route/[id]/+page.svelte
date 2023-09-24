<script lang="ts">
  import { onMount } from 'svelte';
  import RoutePanel from '$lib/components/panels/RoutePanel.svelte';
  import { activeMenuItem } from '$lib/data.js';

  export let data;

  let allRoutes: Route[];

  let selectedRouteId = data.routeId;
  let selectedRoute: Route | null = null;

  let isLoading = false;

  activeMenuItem.set('routes');

  async function fetchData() {
    let routes: Route[] = (await fetch('/data/routes.json').then((res) => res.json())) ?? [];
    return { routes };
  }

  function loadNewRoute() {
    window.location.href = `/route/${selectedRouteId}`;
    isLoading = true;
  }

  function findRoute(routeId: number) {
    return allRoutes.find((route) => route.id === routeId) ?? null;
  }

  onMount(async () => {
    let { routes } = await fetchData();
    allRoutes = routes;

    selectedRoute = findRoute(selectedRouteId);
  });

  $: if (selectedRoute != null) {
    selectedRoute = findRoute(selectedRouteId);
  }
</script>

{#if selectedRoute != null}
  <div class="mx-5 my-5 flex items-center">
    <label for="route">Route: </label>
    <select
      name="route"
      id="route"
      class="bg-slate-300 ml-2 p-1 w-full rounded-md"
      bind:value={selectedRouteId}
      on:change={loadNewRoute}
    >
      {#each allRoutes as route}
        <option value={route.id}>{route.name}</option>
      {/each}
    </select>
  </div>

  {#if !isLoading}
    <RoutePanel route={selectedRoute} />
  {/if}
{/if}
