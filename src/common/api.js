import Location from "../locations/Location";
import { DATASETS } from "./constants";

const ROOT =
  "https://raw.githubusercontent.com/janithl/lk-dataexplorer/master/public/data";
const LOCATIONS = "locations.json";

const fetchAsync = async url => (await fetch(url)).json();

const objectify = (data, key = "id", transform = item => item) =>
  data.reduce((acc, val) => {
    acc[val[key]] = transform(val);
    return acc;
  }, {});

export default class API {
  static fetchLocations() {
    return fetchAsync([ROOT, LOCATIONS].join("/"));
  }

  static parseLocations(response) {
    return objectify(response, "code", loc => new Location(loc));
  }

  static fetchElectoralData() {
    return fetchAsync([ROOT, DATASETS.electoral.url].join("/"));
  }
}
