import axios from "axios";
import { VenueResponse } from "models";
import { DEFAULT_LAT, DEFAULT_LNG } from "app-constants";

const baseUrl = `https://api.foursquare.com/v2/venues/search`;
const queryParams = `?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&v=${process.env.REACT_APP_V}&categoryId=${process.env.REACT_APP_CATEGORY_ID}&ll=${DEFAULT_LAT},${DEFAULT_LNG}&radius=${process.env.REACT_APP_RADIUS_IN_METER}`;
const fourSquareApiUrl = baseUrl + queryParams;

export function getVenues(query = ""): Promise<VenueResponse> {
  return axios
    .get(fourSquareApiUrl + `&query=${query}`)
    .then((res) => res.data);
}
