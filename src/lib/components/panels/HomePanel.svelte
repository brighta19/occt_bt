<script lang="ts">
  const routes = [
    { name: 'Westside', color: '#4fcaff' },
    { name: 'Leroy Southside', color: '#e64fff' },
    { name: 'Main Street', color: '#ff794f' },
    { name: 'Downtown Leroy Center', color: '#674fff' }
  ];
</script>

<div class="py-5">
  <h2 class="mb-5 pl-5 text-2xl">Routes</h2>

  {#each routes as route}
    <div
      style:--bg-color={route.color}
      class="bg-[--bg-color] text-white rounded-md mb-4 mx-5 px-3 py-3"
      style="--color: {route.color}"
    >
      <p>{route.name}</p>
    </div>
  {/each}
</div>
