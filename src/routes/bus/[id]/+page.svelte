<script lang="ts">
  import BusPanel from '$lib/components/panels/BusPanel.svelte';

  export let data;

  let ready = true;

  let selectedBusId = data.busId;

  let bus: Bus = {
    id: selectedBusId,
    route_id: 0,
    direction: 'inbound',
    next_stop_eta: 0,
    next_stop_id: 0
  };
</script>

{#if ready}
  <BusPanel {bus} />
{/if}
