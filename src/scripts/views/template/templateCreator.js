import CONFIG from "../../global/config";
import API_ENDPOINT from "../../global/end-point";
import detailInitiator from "../../utils/detail-initiator";

const cardTemplate = (restaurant) => `
  <div class="card" >
    <img class="card_image" src="${API_ENDPOINT.PICTURE}${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="background-favorite"></div>
    <div class="favorite-wrapper" id="${restaurant.id}">
      <span class="material-icons">favorite_border</span>
    </div>
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
      API_ENDPOINT.PICTURE
    }${restaurant.pictureId}')">
      
      <div class="restaurant-name_wrapper">
        <h1 class="restaurant-name" tabindex="0">${restaurant.name}</h1>
        <p class="restaurant-category" tabindex="0">${detailInitiator.categoryInitiator(
          restaurant
        )}</p>
      </div>
      <div class="location-wrapper" >
        <span class="material-icons">location_on</span>
        <p class="location" tabindex="0"  >${restaurant.address}, ${
  restaurant.city
}</p>
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
    <h1 class="detail-title" tabindex="0" id="skip_content">Menus</h1>
    <div class="restaurant-menu">
      <div class="foods-menu">
        <h1 class="foods" tabindex="0">.Foods</h1>
        ${detailInitiator.menuInitiator({
          restaurant: restaurant,
          menuType: "foods",
        })}
      </div>
      <div class="drinks-menu" >
        <h1 class="drinks" tabindex="0">.Drinks</h1>
        ${detailInitiator.menuInitiator({
          restaurant: restaurant,
          menuType: "drink",
        })}
      </div>
    </div>
    <div class="reviews">
      <h1 class="detail-title" tabindex="0">Reviews</h1>
      <div class="reviews-wrapper">
          ${detailInitiator.reviewsInitiator(restaurant)}
      </div>
    </div>
    <div class="add-review">
      <h1 class="review-title" tabindex="0">Add Your Review</h1>
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
  <button aria-label="unlike this restaurant" class="favorite">
    <span class="material-icons">favorite</span>
  </button>
`;

const favoritedIconTamplate = () =>
  `<span class="material-icons">favorite</span>`;

const menuListTemplate = (menu) => `
  <div class="foods-list">
    <div class="icon-food-list"></div>
    <p class="food-name" tabindex="0">${menu}</p>
  </div>
`;

const cardReviewTemplate = (review) => `
  <div class="card-review">
    <div class="identity-review">
      <div class="review-avatar"></div>
      <div class="review-user">
        <h2 class="review-username" tabindex="0">${review.name}</h2>
        <p class="review-date" tabindex="0">${review.date}</p>
      </div>
    </div>
    <div class="review-body">
      <p class="review-text" tabindex="0">${review.review}</p>
    </div>
  </div>
`;

export {
  cardTemplate,
  favoriteButtonTemplate,
  favoritedButtonTemplate,
  restaurantDetailTemplate,
  menuListTemplate,
  cardReviewTemplate,
  favoritedIconTamplate,
};
