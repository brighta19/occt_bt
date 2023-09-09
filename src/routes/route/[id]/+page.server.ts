import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const routeId = Number(params.id);

  return { routeId };
};
