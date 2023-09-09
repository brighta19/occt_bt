<script lang="ts">
  import Header from '../Header.svelte';

  export let route: Route;

  function toTimeRemaining(epochTime: number) {
    let date = new Date(epochTime);
    let minutes = date.getMinutes();

    if (minutes === 0) {
      return `At Stop`;
    }
    if (minutes < 60) {
      return `${minutes} min.`;
    }
    return minutes;
  }
</script>

<Header name="Route" />

<div class="flex pb-5 mx-5 border-b-[1px] border-b-gray-500 flex-col">
  <div class="flex items-center w-full">
    <div class="w-fit flex flex-col items-center">
      <div style="--bg-color: {route.color}" class="bg-[var(--bg-color)] w-[25px] h-[25px]" />
      <p class="text-center text-xs">#{route.id}</p>
    </div>
    <div class="ml-5 w-full">
      <p class="text-gray-500">Name</p>
      <p class="text-2xl">{route.name}</p>
    </div>
  </div>
</div>
