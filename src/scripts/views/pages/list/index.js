import { cardTemplate } from "../../template/templateCreator";
import RestaurantData from "../../../data/restaurant-source";
import "./styles.css";
import FavButtonInitiator from "../../../utils/fav-button-initiator";

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

export default RestaurantList;
