import API_ENDPOINT from "../global/end-point";

class RestaurantList {
  static async allRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantList;
