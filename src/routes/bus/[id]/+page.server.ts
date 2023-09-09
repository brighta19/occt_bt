import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const busId = Number(params.id);

  return { busId };
};
