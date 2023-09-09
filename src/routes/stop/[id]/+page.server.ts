import type { PageServerLoad } from './$types';

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
    id: string; // number
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
      directionAbbr: 'Out' | 'In';
      equipmentID: string;
      routeID: number;
    }[];
  }[];
};

let routeConversions: RouteConversion[] = [];

function getInternalRoute(externalRouteId: number) {
  const byExternalRouteId = (conversion: RouteConversion) => {
    return conversion.external_route_id === externalRouteId;
  };

  return (
    routeConversions.find(byExternalRouteId)?.internal ?? {
      route_id: 0,
      direction: 'inbound'
    }
  );
}

export const load: PageServerLoad = async ({ params, fetch: localFetch }) => {
  const stopId = Number(params.id);
  let buses: Bus[] = [];

  routeConversions = await localFetch('/data/route_conversion.json').then((res) => res.json());

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
};
