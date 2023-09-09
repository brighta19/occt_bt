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

<div
  style="--bg-color: {route.color}"
  class="bg-[var(--bg-color)] rounded-md px-3 py-2 mb-2 relative text-white shadow-slate-200 shadow-md"
>
  <div class="absolute top-0 right-1">
    <p class="text-5xl font-bold opacity-30">
      {route.abbreviation}
    </p>
  </div>
  <div class="flex relative">
    <div class="text-3xl">
      <i class="fa-solid fa-bus" aria-hidden="true" />
    </div>
    <div class="pl-2 w-full">
      <div class="flex justify-between" style="text-shadow: 0 2px 5px #888">
        <div>
          <p class="text-2xl mb-1">{route.name}</p>
          {#if doesRouteHaveTwoDirections(route)}
            <p class="text-sm">{bus.direction === 'inbound' ? 'Inbound' : 'Outbound'}</p>
          {/if}
        </div>
        <p class="font-bold text-right mt-1 ml-2 min-w-max">
          {toTimeRemainingText(bus.next_stop_eta ?? 0)}
        </p>
      </div>
    </div>
  </div>
</div>
