import FavoriteRestaurantDb from '../data/favoriteRestaurant-source';
import {
  favoriteButtonTemplate,
  favoritedButtonTemplate,
} from '../views/template/templateCreator';
import NotificationHelper from './notification-helper';

const FavButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this._restaurant;

    if (await this.isRestaurantsExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantsExist(id) {
    const restaurant = await FavoriteRestaurantDb.getRestaurant(id);
    return !restaurant;
  },

  renderLiked() {
    this._favButtonContainer.innerHTML = favoriteButtonTemplate();

    const favButton = document.querySelector('.favorite');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantDb.putRestaurant(this._restaurant);
      this.renderButton();
      NotificationHelper.sendNotification({
        title: 'Add to Your Favorite Restaurant',
        options: {
          body: `${this._restaurant.name} add to your favorite restaurant!`,
        },
      });
    });
  },

  renderLike() {
    this._favButtonContainer.innerHTML = favoritedButtonTemplate();

    const favButton = document.querySelector('.favorite');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantDb.deleteRestaurant(this._restaurant.id);
      this.renderButton();
      NotificationHelper.sendNotification({
        title: 'Removed from Your Favorite Restaurant',
        options: {
          body: `${this._restaurant.name} has been removed from your favorite restaurant!`,
        },
      });
    });
  },
};

export default FavButtonInitiator;
