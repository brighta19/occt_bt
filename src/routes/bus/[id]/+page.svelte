<script lang="ts">
  import BusPanel from '$lib/components/panels/BusPanel.svelte';

  export let data;
  let bus = data.bus;

  let ready = true;

  let selectedBusId = bus.id;
</script>

{#if ready}
  <BusPanel {bus} />
{/if}
