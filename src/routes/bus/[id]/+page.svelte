<script lang="ts">
  import BusPanel from '$lib/components/panels/BusPanel.svelte';
  import { activeMenuItem } from '$lib/data.js';

  export let data;
  let bus = data.bus;

  let ready = true;

  let selectedBusId = bus.id;

  activeMenuItem.set('buses');
</script>

{#if ready}
  <BusPanel {bus} />
{/if}
