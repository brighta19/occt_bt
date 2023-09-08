type Stop = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};

type Route = {
  id: number;
  name: string;
  abbreviation: string;
  color: string;
  direction: {
    inbound: {
      schedules: {
        schedule_id: number;
        label: string;
        days: string[];
      }[];
    } | null;
    outbound: {
      schedules: {
        schedule_id: number;
        label: string;
        days: string[];
      }[];
    } | null;
  };
};

type Schedule = {
  id: number;
  stop_ids: number[];
  pattern: {
    start_stop_id: number;
    destination_stop_id: number;
    minutes: number;
  }[];
  departure_times: number[];
};

type Bus = {
  id: number;
  route_id: number;
  direction: string;
  next_stop_id: number;
  next_stop_eta: number;
};

type RouteConversion = {
  external_route_id: number;
  internal: {
    route_id: number;
    direction: 'inbound' | 'outbound';
  };
};
