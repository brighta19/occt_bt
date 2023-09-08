import type { RequestEvent } from '@sveltejs/kit';

export async function load(request: RequestEvent) {
  return {
    route_id: request.params['id']
  };
}
