<script context="module">
  export const Icon = {
    BUS: '<i class="fa-solid fa-bus" aria-hidden="true"></i>',
    STOP: '<i class="fa-solid fa-location-dot" aria-hidden="true"></i>',
    ROUTE: '<i class="fa-solid fa-route" aria-hidden="true"></i>'
  };
</script>

<script lang="ts">
  import { activeMenuItem } from '$lib/data';

  export let menuItems: {
    icon: string;
    link: string;
    name: string;
  }[];
</script>

<nav class="fixed bottom-0 w-full flex bg-white z-10 border-t">
  {#each menuItems as menuItem}
    <a
      href={menuItem.link}
      class="flex p-2 gap-2 w-full justify-center items-center hover:bg-slate-200 focus:bg-slate-200"
      class:bg-slate-300={$activeMenuItem === menuItem.name}
    >
      {@html menuItem.icon}
      <p class="capitalize">{menuItem.name}</p>
    </a>
  {/each}
</nav>
