import FavoriteRestaurantDb from '../data/favoriteRestaurant-source';
import { favoritedIconTamplate } from '../views/template/templateCreator';

const FavoriteIconInitiator = {
  async init() {
    this.dataIterator();
  },

  async dataIterator() {
    const restaurantSaved = await this.getIdDataSaved();
    restaurantSaved.forEach((restaurant) => {
      this.implementIcons(restaurant.id);
    });
  },

  implementIcons(id) {
    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = favoritedIconTamplate();
    }
  },

  async getIdDataSaved() {
    const data = await FavoriteRestaurantDb.getAllRestaurant();
    return data;
  },
};

export default FavoriteIconInitiator;
