import RestaurantData from "../../../data/restaurant-source";
import UrlParser from "../../../routes/urlParser";
import addReviewInitiator from "../../../utils/addReview-initiator";
import FavButtonInitiator from "../../../utils/fav-button-initiator";
import { restaurantDetailTemplate } from "../../template/templateCreator";

const Detail = {
  async render() {
    return `
      <div class="detail-content">
        <loader-elm></loader-elm>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await RestaurantData.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector(".detail-content");
    if (restaurantData.error) {
      restaurantContainer.innerHTML = `<error-elm></error-elm>`;
    } else {
      restaurantContainer.innerHTML = restaurantDetailTemplate(restaurantData);
      FavButtonInitiator.init({
        favButtonContainer: document.querySelector(".favorite-detail"),
        restaurant: {
          id: restaurantData.id,
          name: restaurantData.name,
          city: restaurantData.city,
          rating: restaurantData.rating,
          pictureId: restaurantData.pictureId,
          description: restaurantData.description,
        },
      });

      this.handleReview(restaurantData.id);
    }
  },

  handleReview(id) {
    const addReviewButton = document.querySelector(".submit");
    const inputName = document.querySelector(".input-name");
    const inputReview = document.querySelector(".input-review");

    addReviewButton.addEventListener("click", () => {
      addReviewInitiator.init({
        dataReview: {
          id: id,
          name: inputName.value,
          review: inputReview.value,
        },
      });
    });
  },
};

export default Detail;
