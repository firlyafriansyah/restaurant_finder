import RestaurantData from "../../../data/restaurant-source";
import UrlParser from "../../../routes/urlParser";
import { restaurantDetailTemplate } from "../../template/templateCreator";

const Detail = {
  async render() {
    return `
      <div class="detail-content"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.detailRestaurant(url.id);
    const restauarntContainer = document.querySelector(".detail-content");
    restauarntContainer.innerHTML = restaurantDetailTemplate(
      restaurant.restaurant
    );
  },
};

export default Detail;
