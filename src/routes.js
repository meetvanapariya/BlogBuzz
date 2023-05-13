import Home from './components/home/home';
import Blog from "./components/blogs/blog";
const routes = [
  {
    name: "Home",
    url:"/home",
    component: <Home />
  },
  {
    name: "Blog",
    url:"/blog",
    exact:true,
    component: <Blog />
  },

];
export default routes;