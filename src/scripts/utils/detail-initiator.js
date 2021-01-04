// eslint-disable-next-line import/no-cycle
import { menuListTemplate, cardReviewTemplate } from '../views/template/templateCreator';

const detailInitiator = {
  categoryInitiator(restaurant) {
    const name = [];
    restaurant.categories.forEach((category) => {
      name.push(category.name);
    });
    return `${name.join(' | ')} Restaurant`;
  },

  menuInitiator({ restaurant, menuType }) {
    let menus;
    let menuElements = '';

    if (menuType === 'foods') {
      menus = this.menuFoodsIterator(restaurant);
    } else {
      menus = this.menuDrinksIterator(restaurant);
    }

    menus.forEach((menu) => {
      menuElements += menuListTemplate(menu);
    });
    return menuElements;
  },

  reviewsInitiator(restaurant) {
    const reviews = restaurant.customerReviews;
    let reviewsElement = '';

    reviews.forEach((review) => {
      reviewsElement += cardReviewTemplate(review);
    });

    return reviewsElement;
  },

  menuFoodsIterator(restaurant) {
    const foods = [];

    restaurant.menus.foods.forEach((food) => {
      foods.push(food.name);
    });
    return foods;
  },

  menuDrinksIterator(restaurant) {
    const drinks = [];

    restaurant.menus.drinks.forEach((drink) => {
      drinks.push(drink.name);
    });
    return drinks;
  },
};

export default detailInitiator;
