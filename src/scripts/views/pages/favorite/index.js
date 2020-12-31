import { cardTemplate } from "../../template/templateCreator";
import "./styles.css";
import FavoriteRestaurantDb from "../../../data/favoriteRestaurant-source";
import FavoriteIconInitiator from "../../../utils/favoriteIcon-initiator";

const YourFavorite = {
  async render() {
    return `
      <div class="gap"></div>
      <h1 class="favorite-restaurant_title" id="skip_content">Your Favorite</h1>
      <div class="card_wrapper"></div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantDb.getAllRestaurant();
    const container = document.querySelector(".card_wrapper");
    if (restaurant.length <= 0) {
      container.innerHTML = `<div class="favorite-empty"><h2>Anda belum mempunyai Restaurant Favorite</h2></div>`;
    }
    restaurant.forEach((restaurant) => {
      container.innerHTML += cardTemplate(restaurant);
    });

    FavoriteIconInitiator.init();
  },
};

export default YourFavorite;
