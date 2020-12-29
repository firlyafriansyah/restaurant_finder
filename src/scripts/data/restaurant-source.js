import API_ENDPOINT from "../global/end-point";

class RestaurantData {
  static async allRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    const sortedRestaurant = await responseJson.restaurants.sort(
      (a, b) => b.rating - a.rating
    );
    return sortedRestaurant;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantData;