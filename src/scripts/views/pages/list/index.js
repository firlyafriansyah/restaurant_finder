import { cardTemplate } from "../../template/templateCreator";
import RestaurantData from "../../../data/restaurant-source";
import "./styles.css";
import FavoriteIconInitiator from "../../../utils/favoriteIcon-initiator";

const RestaurantList = {
  async render() {
    return `
      <div class="gap"></div>
      <h1 class="list-restaurant_title" id="skip_content">List Restaurant</h1>
      <div class="card_wrapper">
        <loader-elm></loader-elm>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantData.allRestaurantList();
    const container = document.querySelector(".card_wrapper");
    container.innerHTML = "";
    restaurant.forEach((restaurant) => {
      container.innerHTML += cardTemplate(restaurant);
    });
    FavoriteIconInitiator.init();
  },
};

export default RestaurantList;
