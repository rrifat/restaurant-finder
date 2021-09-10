export interface VenueResponse {
  meta: Meta;
  response: Response;
}

export interface Meta {
  code: number;
  requestId: string;
}

export interface Response {
  venues: Venue[];
}

export interface Venue {
  id: string;
  name: string;
  location: Location;
  categories: Category[];
  referralId: string;
  hasPerk: boolean;
}

export interface Category {
  id: string;
  name: string;
  pluralName: string;
  shortName: string;
  icon: Icon;
  primary: boolean;
}

export interface Icon {
  prefix: string;
  suffix: string;
}

export interface Location {
  lat: number;
  lng: number;
  labeledLatLngs: LabeledLatLng[];
  distance: number;
  cc: string;
  state: string;
  country: string;
  formattedAddress: string[];
}

export interface LabeledLatLng {
  label: string;
  lat: number;
  lng: number;
}
