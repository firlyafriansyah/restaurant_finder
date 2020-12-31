import {
  cardReviewTemplate,
  menuListTemplate,
} from "../views/template/templateCreator";

const detailInitiator = {
  categoryInitiator(restaurant) {
    let name = [];
    restaurant.categories.forEach((category) => {
      name.push(category.name);
    });
    return `${name.join(" | ")} Restaurant`;
  },

  menuInitiator({ restaurant, menuType }) {
    let menus;
    let menuElements = "";

    if (menuType === "foods") {
      menus = this._menuFoodsIterator(restaurant);
    } else {
      menus = this._menuDrinksIterator(restaurant);
    }

    menus.forEach((menu) => {
      menuElements += menuListTemplate(menu);
    });
    return menuElements;
  },

  reviewsInitiator(restaurant) {
    const reviews = restaurant.customerReviews;
    let reviewsElement = "";

    reviews.forEach((review) => {
      reviewsElement += cardReviewTemplate(review);
    });

    return reviewsElement;
  },

  _menuFoodsIterator(restaurant) {
    let foods = [];

    restaurant.menus.foods.forEach((food) => {
      foods.push(food.name);
    });
    return foods;
  },

  _menuDrinksIterator(restaurant) {
    let drinks = [];

    restaurant.menus.drinks.forEach((drink) => {
      drinks.push(drink.name);
    });
    return drinks;
  },
};

export default detailInitiator;
