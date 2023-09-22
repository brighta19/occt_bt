<script lang="ts">
  export let bus: Bus;
  export let route: Route;

  function doesRouteHaveTwoDirections(route: Route) {
    return route.direction.inbound !== null && route.direction.outbound !== null;
  }

  function toTimeRemainingText(epochTime: number) {
    const date = new Date(epochTime);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    let text = '';

    if (hours > 0) {
      text += `${hours} hr.`;
      text += minutes > 0 ? ` ${minutes} min.` : '';
    } else {
      text += minutes > 0 ? `${minutes} min.` : 'At Stop';
    }

    return text;
  }
</script>

<a
  href="/bus/{bus.id}"
  style:--bg-color={route.color}
  class="block mb-2 bg-[--bg-color] rounded-md p-2 relative text-white shadow-slate-200 border-transparent border-2 shadow-md hover:border-black focus:border-black"
>
  <div class="flex">
    <i
      class="text-2xl fa-solid fa-bus"
      style="text-shadow: 0 0 4px rgba(0,0,0,0.2)"
      aria-hidden="true"
    />
    <div class="pl-2 w-full">
      <div class="flex justify-between" style="text-shadow: 0 0 4px rgba(0,0,0,0.4)">
        <div>
          <p class="text-xl route-name">{route.name}</p>
          {#if doesRouteHaveTwoDirections(route)}
            <p class="text-sm">
              {bus.direction === 'inbound' ? 'Inbound' : 'Outbound'}
            </p>
          {/if}
        </div>
        <p class="font-bold text-right mt-1 ml-2 min-w-max">
          {toTimeRemainingText(bus.next_stop_eta ?? 0)}
        </p>
      </div>
    </div>
  </div>
</a>

<style>
  a:hover .route-name,
  a:focus .route-name {
    text-decoration: underline;
  }
</style>
