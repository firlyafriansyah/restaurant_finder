import RestaurantData from "../../../data/restaurant-source";
import FavButtonInitiator from "../../../utils/fav-button-initiator";
import {
  cardTemplate,
  favoritedButtonTemplate,
} from "../../template/templateCreator";
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
    const restaurant = await RestaurantData.allRestaurantList();
    const contianer = document.querySelector(".card_wrapper");
    restaurant.forEach((restaurant) => {
      if (counter < 8) {
        contianer.innerHTML += cardTemplate(restaurant);
      }
      counter++;
    });
    const buttonContainer = document.querySelectorAll(".favorite-wrapper");
    await this.favButtonImplementation(restaurant, buttonContainer);
  },

  async favButtonImplementation(restaurant, buttonContainer) {
    let count = 0;
    buttonContainer.forEach((contianer) => {
      FavButtonInitiator.init({
        favButtonContainer: contianer,
        restaurant: {
          id: restaurant[count].id,
          name: restaurant[count].name,
          city: restaurant[count].city,
          description: restaurant[count].description,
          pictureId: restaurant[count].pictureId,
          rating: restaurant[count].rating,
        },
      });
      count++;
    });
  },
};

export default Home;
