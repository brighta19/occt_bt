<script lang="ts">
  import { onMount } from 'svelte';
  import StopPanel from '$lib/components/panels/StopPanel.svelte';

  export let data;
  let buses = data.buses;

  let ready = false;

  let stops: Stop[];

  let selectedStopId = data.stopId;
  let selectedStop: Stop;

  onMount(async () => {
    stops = (await fetch('/data/stops.json').then((res) => res.json())) ?? [];

    selectedStop = stops.find((stop) => stop.id === selectedStopId) ?? stops[0];

    ready = true;

    setTimeout(() => window.location.reload(), 40000);
  });

  $: if (ready) {
    selectedStop = stops.find((stop) => stop.id === selectedStopId) ?? stops[0];
  }
</script>

{#if ready}
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
      on:change={() => (window.location.href = `/stop/${selectedStopId}`)}
    >
      {#each stops as stop}
        <option value={stop.id}>{stop.name}</option>
      {/each}
    </select>
  </div>

  <StopPanel stop={selectedStop} {buses} />
{/if}
