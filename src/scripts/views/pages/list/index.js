import { cardTemplate } from "../../template/templateCreator";
import RestaurantData from "../../../data/restaurant-source";
import "./styles.css";

const RestaurantList = {
  async render() {
    return `
      <div class="gap"></div>
      <h1 class="list-restaurant_title">List Restaurant</h1>
      <div class="card_wrapper"></div>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantData.allRestaurantList();
    const container = document.querySelector(".card_wrapper");
    restaurant.forEach((restaurant) => {
      container.innerHTML += cardTemplate(restaurant);
    });
  },
};

export default RestaurantList;
