import FavoriteRestaurantDb from "../data/favoriteRestaurant-source";
import CONFIG from "../global/config";
import {
  favoriteButtonTemplate,
  favoritedButtonTemplate,
} from "../views/template/templateCreator";
import NotificationHelper from "./notification-helper";

const FavButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantsExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantsExist(id) {
    const restaurant = await FavoriteRestaurantDb.getRestaurant(id);
    return !restaurant;
  },

  _renderLiked() {
    this._favButtonContainer.innerHTML = favoriteButtonTemplate();

    const favButton = document.querySelector(".favorite");
    favButton.addEventListener("click", async () => {
      await FavoriteRestaurantDb.putRestaurant(this._restaurant);
      this._renderButton();
      NotificationHelper.sendNotification({
        title: `Add to Your Favorite Restaurant`,
        options: {
          body: `${this._restaurant.name} add to your favorite restaurant!`,
        },
      });
    });
  },

  _renderLike() {
    this._favButtonContainer.innerHTML = favoritedButtonTemplate();

    const favButton = document.querySelector(".favorite");
    favButton.addEventListener("click", async () => {
      await FavoriteRestaurantDb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
      NotificationHelper.sendNotification({
        title: `Removed from Your Favorite Restaurant`,
        options: {
          body: `${this._restaurant.name} has been removed from your favorite restaurant!`,
        },
      });
    });
  },
};

export default FavButtonInitiator;
