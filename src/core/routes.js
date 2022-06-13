import Home from "../components/Home";
import User from "../components/User";
import NotFound from "../components/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/404",
    component: NotFound,
  },
];

export default routes;
