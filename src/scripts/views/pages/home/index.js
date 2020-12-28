import RestaurantList from "../../../data/restaurant-source";

const Home = {
  async render() {
    return `
      <hero-elm></hero-elm>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantList.allRestaurantList();
    console.log(restaurant);
  },
};

export default Home;
