import RestaurantData from "../../../data/restaurant-source";
import FavButtonInitiator from "../../../utils/fav-button-initiator";
import { cardTemplate } from "../../template/templateCreator";
import "./styles.css";

const Home = {
  async render() {
    return `
      <hero-elm></hero-elm>
      <intro-elm></intro-elm>
      <main>
        <div class="content_wrapper" id="restaurant">
          <h1 class="content_title" tabindex="0">8 Best Restaurant</h1>
          <p class="description">Ini adalah 8 restoran terbaik saat ini, berdasarkan rating yang diberikan pengunjung.</p>
          <div class="card_wrapper"></div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    let counter = 0;
    const restaurant = await RestaurantData.bestRestaurant();
    const contianer = document.querySelector(".card_wrapper");
    restaurant.forEach((restaurant) => {
      if (counter < 8) {
        contianer.innerHTML += cardTemplate(restaurant);
      }
      counter++;
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

export default Home;
