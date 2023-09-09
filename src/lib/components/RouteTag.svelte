<script lang="ts">
  export let route: Route;
</script>

<a
  href="/route/{route.id}"
  class="inline-flex rounded-xl hover:bg-white hover:underline focus:bg-white focus:underline bg-gray-200 py-1 px-2 mb-2 mr-2 border-[1px] border-black items-center shadow-slate-200 shadow-md"
>
  <div
    style="--color: {route.color}"
    class="rounded-full bg-[var(--color)] w-[15px] h-[15px] mr-1"
  />
  <p class="text-sm">{route.name}</p>
</a>
