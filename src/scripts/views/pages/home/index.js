import RestaurantData from '../../../data/restaurant-source';
import FavoriteIconInitiator from '../../../utils/favoriteIcon-initiator';
import { cardTemplate } from '../../template/templateCreator';
import './styles.css';

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
    const container = document.querySelector('.card_wrapper');
    const responseRestaurant = await RestaurantData.bestRestaurant();
    if (responseRestaurant.error) {
      container.innerHTML = '<error-elm></error-elm>';
    } else {
      const restaurant = responseRestaurant.restaurants;
      container.innerHTML = '';
      restaurant.forEach((resto) => {
        if (counter < 8) {
          container.innerHTML += cardTemplate(resto);
        }
        counter += 1;
      });
      FavoriteIconInitiator.init();
    }
  },
};

export default Home;
