import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const busId = Number(params.id);

  // const endpoint = `http://binghamtonupublic.etaspot.net/service.php?service=get_stop_etas&stopID=${stopId}&statusData=1&token=TESTING`;
  // const data: StopEtaData | undefined = await fetch(endpoint).then((res) => res.json());

  const bus: Bus = {
    id: busId,
    route_id: 0,
    direction: 'outbound',
    next_stop_eta: 0,
    next_stop_id: 0
  };

  return { bus };
};
