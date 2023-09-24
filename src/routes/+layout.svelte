<script lang="ts">
  import Navbar, { Icon } from '$lib/components/Navbar.svelte';
  import '../app.css';

  const menuItems = [
    { icon: Icon.STOP, link: '/stop/1', name: 'stops' },
    { icon: Icon.ROUTE, link: '/route/0', name: 'routes' }
  ];
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

<Navbar {menuItems} />

<slot />
