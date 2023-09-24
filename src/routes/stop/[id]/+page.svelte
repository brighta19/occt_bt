<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import StopPanel from '$lib/components/panels/StopPanel.svelte';

  export let data;
  let buses = data.buses;

  let allStops: Stop[];

  let selectedStopId = data.stopId;
  let selectedStop: Stop | null = null;

  let isLoading = false;
  let timeoutId: NodeJS.Timeout | undefined;

  async function fetchData() {
    let stops: Stop[] = (await fetch('/data/stops.json').then((res) => res.json())) ?? [];
    return { stops };
  }

  function loadNewStop() {
    window.location.href = `/stop/${selectedStopId}`;
    isLoading = true;
  }

  function findStop(stopId: number) {
    return allStops.find((stop) => stop.id === stopId) ?? null;
  }

  onMount(async () => {
    let { stops } = await fetchData();
    allStops = stops;

    selectedStop = findStop(selectedStopId);

    timeoutId = setTimeout(() => window.location.reload(), 40000);
  });

  onDestroy(() => timeoutId && clearTimeout(timeoutId));

  $: if (selectedStop != null) {
    selectedStop = findStop(selectedStopId);
  }
</script>

{#if selectedStop != null}
  <div class="mx-5 my-5 flex items-center">
    <button
      type="button"
      class="mr-3 rounded-full border border-gray-500 px-2"
      on:click={() => window.location.reload()}
    >
      <i class="fa-solid fa-arrows-rotate" aria-hidden="true" />
    </button>
    <label for="stop">Stop: </label>
    <select
      name="stop"
      id="stop"
      class="bg-slate-300 ml-2 p-1 w-full rounded-md"
      bind:value={selectedStopId}
      on:change={loadNewStop}
    >
      {#each allStops as stop}
        <option value={stop.id}>{stop.name}</option>
      {/each}
    </select>
  </div>

  {#if !isLoading}
    <StopPanel stop={selectedStop} {buses} />
  {/if}
{/if}
