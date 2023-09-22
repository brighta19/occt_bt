<script lang="ts">
  import 'leaflet/dist/leaflet.css';
  import { onMount } from 'svelte';
  import type { Map } from 'leaflet';

  let element: HTMLElement;

  let stops: Stop[] = [];

  let mapInitialView = {
    latitude: 42.0918,
    longitude: -75.9384,
    zoom: 14
  };

  async function fetchData() {
    let stops: Stop[] = (await fetch('/data/stops.json').then((res) => res.json())) ?? [];
    return { stops };
  }

  onMount(async () => {
    let { stops: _stops } = await fetchData();
    stops = _stops;

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
