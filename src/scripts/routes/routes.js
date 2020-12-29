import Detail from "../views/pages/detail";
import { Home, YourFavorite, RestaurantList } from "../views/pages/index";

const routes = {
  "/": Home,
  "/home": Home,
  "/list-restaurant": RestaurantList,
  "/your-favorite": YourFavorite,
  "/restaurant-detail/:id": Detail,
};

export default routes;
