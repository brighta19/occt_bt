<script lang="ts">
  import 'leaflet/dist/leaflet.css';
  import stops from '$lib/stops';
  import { onMount } from 'svelte';
  import type { Map } from 'leaflet';

  let element: HTMLElement;

  let mapInitialView = {
    latitude: 42.0918,
    longitude: -75.9384,
    zoom: 14
  };

  onMount(async () => {
    let Leaflet = await import('leaflet');

    let map = createMap(Leaflet);
    addBusStopMarkers(Leaflet, map);

    // map.locate({ setView: true, maxZoom: 16 });
  });

  function createMap(Leaflet: any): Map {
    let map = Leaflet.map(element).setView(
      [mapInitialView.latitude, mapInitialView.longitude],
      mapInitialView.zoom
    );

    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // Leaflet.styleLayer('style.json', {
    //     maxZoom: 19,
    //     attribution: '© OpenStreetMap'
    // }).addTo(map);

    return map;
  }

  function addBusStopMarkers(Leaflet: any, map: Map) {
    for (let stop of stops) {
      let marker = Leaflet.marker([stop.lat, stop.lng], {
        title: stop.name
      });
      marker.addTo(map);
    }
  }
</script>

<div bind:this={element} class="h-full" />
