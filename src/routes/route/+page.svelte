<script lang="ts">
  import { page } from '$app/stores';
  import RoutePanel from '$lib/components/panels/route.svelte';
  import { onMount } from 'svelte';

  let ready = false;

  let routes: Route[];
  let route: Route;

  let _routeId = $page.url.searchParams.get('id');
  let selectedRouteId = _routeId ? Number(_routeId) : 0;

  onMount(async () => {
    routes = (await fetch('/data/routes.json').then((res) => res.json())) ?? [];

    route = routes.find((route) => route.id === selectedRouteId) ?? routes[0];

    ready = true;
  });

  $: if (ready) {
    route = routes.find((route) => route.id === selectedRouteId) ?? routes[0];
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
    >
      {#each routes as route, index}
        <option value={index}>{route.name}</option>
      {/each}
    </select>
  </div>

  {#key route}
    <RoutePanel {route} />
  {/key}
{/if}
