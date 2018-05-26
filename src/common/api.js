import Location from "../locations/Location";

const ROOT =
  "https://raw.githubusercontent.com/janithl/lk-dataexplorer/master/public/data";
const LOCATIONS = "locations.json";

const fetchAsync = async url => (await fetch(url)).json();

export default class API {
  static objectify = (data, key = "id", transform = item => item) =>
    data.reduce((acc, val) => {
      acc[val[key]] = transform(val);
      return acc;
    }, {});

  static fetchLocations() {
    return fetchAsync([ROOT, LOCATIONS].join("/"));
  }

  static parseLocations(response) {
    return this.objectify(response, "code", loc => new Location(loc));
  }

  static fetchDataset(url) {
    return fetchAsync([ROOT, url].join("/"));
  }

  static parseDataset(response) {
    return {
      dataset: this.objectify(response.dataset),
      metadata: this.objectify(response.metadata, "key")
    };
  }
}
