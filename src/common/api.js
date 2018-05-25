export default class API {
  static fetchLocations() {
    return new Promise(resolve => setTimeout(resolve, 3000, {}));
  }

  static parseLocations(response) {
    return response;
  }
}
