import { cardTemplate } from '../../template/templateCreator';
import RestaurantData from '../../../data/restaurant-source';
import './styles.css';
import FavoriteIconInitiator from '../../../utils/favoriteIcon-initiator';

const RestaurantList = {
  async render() {
    return `
      <div class="gap"></div>
      <h1 class="list-restaurant_title" id="skip_content">List Restaurant</h1>
      <div class="card_wrapper">
        <loader-elm></loader-elm>
      </div>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.card_wrapper');
    const responseRestaurant = await RestaurantData.allRestaurantList();
    if (responseRestaurant.error) {
      container.innerHTML = '<error-elm></error-elm>';
    } else {
      const restaurant = responseRestaurant.restaurants;
      container.innerHTML = '';
      restaurant.forEach((resto) => {
        container.innerHTML += cardTemplate(resto);
      });
      FavoriteIconInitiator.init();
    }
  },
};

export default RestaurantList;
