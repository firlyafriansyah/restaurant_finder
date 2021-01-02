import API_ENDPOINT from "../global/end-point";

class RestaurantData {
  static async allRestaurantList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    const sortedRestaurant = await responseJson;
    sortedRestaurant.restaurants = sortedRestaurant.restaurants.sort(
      (a, b) => b.rating - a.rating
    );
    sortedRestaurant.restaurants.map((restaurants) => {
      restaurants.pictureId = API_ENDPOINT.PICTURE + restaurants.pictureId;
    });
    return sortedRestaurant;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const restaurant = responseJson.restaurant;
    restaurant.pictureId = API_ENDPOINT.PICTURE + restaurant.pictureId;
    return restaurant;
  }

  static async bestRestaurant() {
    const bestResto = await this.allRestaurantList();
    bestResto.restaurants = bestResto.restaurants.slice(0, 8);
    return bestResto;
  }
}

export default RestaurantData;
