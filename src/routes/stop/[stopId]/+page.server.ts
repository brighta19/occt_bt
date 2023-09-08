import type { RequestEvent } from '../$types';

// type VehicleData = {
//     get_vehicles: {
//         routeID: number;
//         patternID: number;
//         equipmentID: string;
//         lat: number;
//         lng: number;
//         nextStopID: number;
//         nextStopETA: number;
//     }[];
// };

type StopEtaData = {
  get_stop_etas: {
    id: string;
    enRoute: {
      blockID: number;
      stopID: number;
      patternStopID: number;
      timePoint: number;
      minutes: number;
      schedule: string;
      time: string;
      scheduleNumber: string;
      status: 'On Time';
      statuscolor: string;
      track: number;
      direction: 'Inbound' | 'Outbound';
      directionAbbr: 'Out';
      equipmentID: string;
      routeID: number;
    }[];
  }[];
};

let routeConversions: RouteConversion[] = [];

function getInternalRoute(externalRouteId: number) {
  let internalRoute = { route_id: 0, direction: 'inbound' };
  internalRoute =
    routeConversions.find((conversion) => conversion.external_route_id === externalRouteId)
      ?.internal ?? internalRoute;
  return internalRoute;
}

export async function load(event: RequestEvent) {
  const stopId = Number(event.params.stopId);
  let buses: Bus[] = [];

  // const endpoint =
  //     'https://binghamtonupublic.etaspot.net/service.php?service=get_vehicles&includeETAData=1&inService=1&orderedETAArray=1&token=TESTING';
  // const data: VehicleData | undefined = await fetch(endpoint).then((res) => res.json());

  // if (data !== undefined) {
  //     // buses.push(
  //     //     ...data.get_vehicles.map((vehicle) => ({
  //     //         id: Number(vehicle.equipmentID),
  //     //         next_stop_id: vehicle.nextStopID,
  //     //         next_stop_eta: vehicle.nextStopETA
  //     //     }))
  //     // );
  // }

  routeConversions = await event.fetch('/data/route_conversion.json').then((res) => res.json());

  const endpoint = `http://binghamtonupublic.etaspot.net/service.php?service=get_stop_etas&stopID=${stopId}&statusData=1&token=TESTING`;
  const data: StopEtaData | undefined = await fetch(endpoint).then((res) => res.json());
  if (data !== undefined) {
    const stop_eta = data.get_stop_etas.find((stop_eta) => Number(stop_eta.id) === stopId);

    buses =
      stop_eta?.enRoute.map((eta) => {
        const internalRoute = getInternalRoute(eta.routeID);
        return {
          id: Number(eta.equipmentID),
          route_id: internalRoute.route_id,
          direction: internalRoute.direction,
          next_stop_eta: eta.minutes * 60 * 1000,
          next_stop_id: eta.stopID
        };
      }) ?? [];
  }

  return { stopId, buses };
}
