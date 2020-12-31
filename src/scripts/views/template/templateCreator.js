import CONFIG from "../../global/config";
import detailInitiator from "../../utils/detail-initiator";

const cardTemplate = (restaurant) => `
  <div class="card" >
    <img class="card_image" src="${CONFIG.PICTURE_URL}${restaurant.pictureId}" alt="Foto list restaurant.">
    <div class="background-favorite"></div>
    <div class="favorite-wrapper" id="${restaurant.id}"></div>
    <div class="information">
      <div class="location">
        <span class="material-icons loc">location_on</span>
        <p tabindex="0">${restaurant.city}</p>
      </div>
      <div class="rating">
        <span class="material-icons star">grade</span>
        <p>${restaurant.rating}</p>
      </div>
    </div>
    <h1 class="restaurant_name" tabindex="0">${restaurant.name}</h1>
    <p class="restaurant_desc" tabindex="0">${restaurant.description}</p>
    <div class="detail-wrapper">
      <a href="#/restaurant-detail/${restaurant.id}" class="detail">Read More</a>
    </div>
  </div>
  `;

const restaurantDetailTemplate = (restaurant) => `
  <div class="gap"></div>
  <div class="detail-wrapper">
    <div class="restaurant-identity" style="background-image: url('${
      CONFIG.PICTURE_URL
    }${restaurant.pictureId}')">
      
      <div class="restaurant-name_wrapper">
        <h1 class="restaurant-name">${restaurant.name}</h1>
        <p class="restaurant-category">${detailInitiator.categoryInitiator(
          restaurant
        )}</p>
      </div>
      <div class="location-wrapper" >
        <span class="material-icons">location_on</span>
        <p class="location">${restaurant.address}, ${restaurant.city}</p>
      </div>
    </div>
    <div class="information-detail">
      <div class="rating-detail">
        <span class="material-icons">grade</span>
        <p>${restaurant.rating}</p>
      </div>
      <div class="favorite-detail"></div>
    </div>
    <div class="detail-description">
      <p>${restaurant.description}</p>
    </div>
    <h1 class="detail-title"">* Menus *</h1>
    <div class="restaurant-menu">
      <div class="foods-menu" >
        <h1 class="foods">.Foods</h1>
        ${detailInitiator.menuInitiator({
          restaurant: restaurant,
          menuType: "foods",
        })}
      </div>
      <div class="drinks-menu" >
        <h1 class="drinks">.Drinks</h1>
        ${detailInitiator.menuInitiator({
          restaurant: restaurant,
          menuType: "drink",
        })}
      </div>
    </div>
    <div class="reviews">
      <h1 class="detail-title">* Reviews *</h1>
      <div class="reviews-wrapper">
          ${detailInitiator.reviewsInitiator(restaurant)}
      </div>
    </div>
    <div class="add-review">
      <h1 class="review-title">Add Your Review</h1>
      <form>
        <label for="name" class="label">Nama :</label>
        <input type="text" id="name" class="input-name input" placeholder="Masukan Nama Kamu..." />
        <label for="review" class="label">Review :</label>
        <textarea id="review" class="input-review input" placeholder="Tulis review kamu disini..."></textarea>
        <button class="submit" type="submit">Tambah Review</button>
      </form>
    </div.
  </div>
`;

const favoriteButtonTemplate = () => `
  <button aria-label="like this restaurant" class="favorite">
    <span class="material-icons">favorite_border</span>
  </button>  
`;

const favoritedButtonTemplate = () => `
  <button aria-label="like this restaurant" class="favorite">
    <span class="material-icons">favorite</span>
  </button>
`;

const foodListTemplate = (foods) => `
  <div class="foods-list">
    <div class="icon-food-list"></div>
    <p class="food-name">${foods}</p>
  </div>
`;

const cardReviewTemplate = (review) => `
  <div class="card-review">
    <div class="identity-review">
      <div class="review-avatar"></div>
      <div class="review-user">
        <h2 class="review-username">${review.name}</h2>
        <p class="review-date">${review.date}</p>
      </div>
    </div>
    <div class="review-body">
      <p class="review-text">${review.review}</p>
    </div>
  </div>
`;

export {
  cardTemplate,
  favoriteButtonTemplate,
  favoritedButtonTemplate,
  restaurantDetailTemplate,
  foodListTemplate,
  cardReviewTemplate,
};
