<script lang="ts">
  import { page } from '$app/stores';
  import StopPanel from '$lib/components/panels/stop.svelte';
  import { onMount } from 'svelte';

  export let data;

  let ready = false;

  let stops: Stop[];

  let selectedStopId = data.stopId;
  let selectedStop: Stop;

  onMount(async () => {
    stops = (await fetch('/data/stops.json').then((res) => res.json())) ?? [];

    selectedStop = stops.find((stop) => stop.id === selectedStopId) ?? stops[0];

    ready = true;
  });

  $: if (ready) {
    selectedStop = stops.find((stop) => stop.id === selectedStopId) ?? stops[0];
  }
</script>

{#if ready}
  <button
    on:click={() => window.location.reload()}
    class="ml-8 mt-2 border-2 border-black px-2 py-1"
  >
    <i class="fa-solid fa-arrows-rotate" />
  </button>

  <div class="mx-5 my-5 flex items-center">
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

  {#key selectedStop}
    <StopPanel stop={selectedStop} {data} />
  {/key}
{/if}
