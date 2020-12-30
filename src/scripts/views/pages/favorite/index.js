import { cardTemplate } from "../../template/templateCreator";
import "./styles.css";
import FavButtonInitiator from "../../../utils/fav-button-initiator";
import FavoriteRestaurantDb from "../../../data/favoriteRestaurant-source";

const YourFavorite = {
  async render() {
    return `
      <div class="gap"></div>
      <h1 class="favorite-restaurant_title">Your Favorite</h1>
      <div class="card_wrapper"></div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantDb.getAllRestaurant();
    const container = document.querySelector(".card_wrapper");
    restaurant.forEach((restaurant) => {
      container.innerHTML += cardTemplate(restaurant);
    });

    this.showFavorite();
  },

  showFavorite() {
    const button = document.querySelectorAll(".favorite-wrapper");
    button.forEach((btn) => {
      FavButtonInitiator.onlyShowButton({
        favButtonContainer: btn,
        id: btn.id,
      });
    });
  },
};

export default YourFavorite;
