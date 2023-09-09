<script>
  import Map from '$lib/components/Map.svelte';
</script>

<div class="relative h-screen">
  <div class="w-full h-1/3">
    <Map />
  </div>

  <div class="w-full h-2/3">
    <div class="m-5">
      <a href="/panel">Panel</a>
      <br />
      <a href="/bus">Bus</a>
      <br />
      <a href="/stop/1">Stop</a>
      <br />
      <a href="/route/1">Route</a>
    </div>
  </div>
</div>
