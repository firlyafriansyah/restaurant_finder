import RestaurantData from "../../../data/restaurant-source";
import CONFIG from "../../../global/config";
import UrlParser from "../../../routes/urlParser";
import FavButtonInitiator from "../../../utils/fav-button-initiator";
import { restaurantDetailTemplate } from "../../template/templateCreator";

const Detail = {
  async render() {
    return `
      <div class="detail-content"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.detailRestaurant(url.id);
    const restauarntContainer = document.querySelector(".detail-content");
    restauarntContainer.innerHTML = restaurantDetailTemplate(
      restaurant.restaurant
    );
    const restaurantData = restaurant.restaurant;
    FavButtonInitiator.init({
      favButtonContainer: document.querySelector(".favorite-detail"),
      restaurant: {
        id: restaurantData.id,
        name: restaurantData.name,
        city: restaurantData.city,
        rating: restaurantData.rating,
        pictureId: restaurantData.pictureId,
        descriptiom: restaurantData.description,
      },
    });

    const addReviewButton = document.querySelector(".submit");
    const data = {
      id: restaurantData.id,
      name: "Ramos",
      review: "Delicious!",
    };
    addReviewButton.addEventListener("click", async () => {
      try {
        const fetchResponse = await fetch(`${CONFIG.BASE_URL}review`, {
          method: "POST",
          headers: {
            "X-Auth-Token": 12345,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const response = await fetchResponse.json();
        console.log(response);
      } catch (e) {
        console.log("Error:", e);
      }
    });
  },
};

export default Detail;
