import RestaurantData from "../../../data/restaurant-source";
import FavoriteIconInitiator from "../../../utils/favoriteIcon-initiator";
import { cardTemplate } from "../../template/templateCreator";
import "./styles.css";

const Home = {
  async render() {
    return `
      <hero-elm></hero-elm>
      <intro-elm></intro-elm>
      <main>
        <div class="content_wrapper" id="restaurant">
          <h1 class="content_title" tabindex="0" id="skip_content">8 Best Restaurant</h1>
          <p class="description">Ini adalah 8 restoran terbaik saat ini, berdasarkan rating yang diberikan pengunjung.</p>
          <div class="card_wrapper">
            <loader-elm></loader-elm>
          </div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    let counter = 0;
    const restaurant = await RestaurantData.bestRestaurant();
    const contianer = document.querySelector(".card_wrapper");
    contianer.innerHTML = "";
    restaurant.forEach((restaurant) => {
      if (counter < 8) {
        contianer.innerHTML += cardTemplate(restaurant);
      }
      counter++;
    });
    FavoriteIconInitiator.init();
  },
};

export default Home;
