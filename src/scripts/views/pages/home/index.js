import RestaurantList from "../../../data/restaurant-source";
import { cardTemplate } from "../../template/templateCreator";
import "./styles.css";
import "./responsive.css";

const Home = {
  async render() {
    return `
      <hero-elm></hero-elm>
      <intro-elm></intro-elm>
      <main>
        <div class="content_wrapper" id="restaurant">
          <h1 class="content_title" tabindex="0">5 Best Restaurant</h1>
          <p class="description">Ini adalah 5 restoran terbaik saat ini, berdasarkan rating yang diberikan pengunjung.</p>
          <div class="card_wrapper"></div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    let counter = 0;
    const restaurant = await RestaurantList.allRestaurantList();
    const contianer = document.querySelector(".card_wrapper");
    restaurant.forEach((restaurant) => {
      if (counter < 5) {
        contianer.innerHTML += cardTemplate(restaurant);
      }
      counter++;
    });
  },
};

export default Home;
