import RestaurantList from "../../../data/restaurant-source";
import "./styles.css";

const Home = {
  async render() {
    return `
      <hero-elm></hero-elm>
      <intro-elm></intro-elm>
      <main>
        <div class="content_wrapper" id="top_restaurant">
          <h1 class="content_title" tabindex="0">Top Restaurant</h1>
          <p class="description">Ini adalah restoran terbaik saat ini, berdasarkan rating yang diberikan pengguna.</p>
          <div class="top_card_wrapper"></div>
        </div>
        <div class="content_wrapper" id="list_restaurant">
          <h1 class="content_title" tabindex="0">Restaurant List</h1>
          <p class="description">Berikut ini adalah restoran - restoran yang memiliki rating tinggi disekitar pengguna.</p>
          <div class="list_card_wrapper"></div>
        </div>
        <div class="content_wrapper" id="best_food">
          <h1 class="content_title" tabindex="0">Best Food</h1>
          <div class="best_food_wrapper"></div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantList.allRestaurantList();
    console.log(restaurant);
  },
};

export default Home;
