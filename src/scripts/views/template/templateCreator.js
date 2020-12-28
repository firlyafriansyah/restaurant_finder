import CONFIG from "../../global/config";

const cardTemplate = (restaurant) => `
  <div class="card" id="list_card">
    <img class="card_image" src="${CONFIG.PICTURE_URL}${restaurant.pictureId}" alt="Foto list restaurant.">
    <div class="background-favorite"></div>
    <div class="favorite-wrapper">
      <span class="material-icons">favorite</span>
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
  </div>
  `;

export { cardTemplate };
