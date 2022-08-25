import { useRoutes } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import News from "./pages/news/News";
import Text from "./pages/text/Text";


const routes = [
  {
    path: "/",
    element: <Homepage />,
    children: [],
  },
  {
    path: "/Blog",
    element: <Homepage />,
    children: [],
  },
  {
    path: "/News",
    element: <News />,
    children: [],
  },
  {
    path: "/News/:id",
    element: <Text />,
    children: [],
  },

];

const Router = () => {
  const routing = useRoutes(routes);
  return (
    <>
      {routing}
    </>
  );

}

export default Router;