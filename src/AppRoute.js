import { useRoutes } from 'react-router-dom';

import { Mint, TasteMakers, VisionMap, FAQ, Team } from "./pages"

const routes = [
  {
    path: "/",
    element: <Mint />,
    children: [],
  },
  {
    path: "/#hero",
    element: <Mint />,
    children: [],
  },
  {
    path: "/#about",
    element: <TasteMakers />,
    children: [],
  },
  {
    path: "/#vision-map",
    element: <VisionMap />,
    children: [],
  },
  {
    path: "/#faq",
    element: <FAQ />,
    children: [],
  },
  {
    path: "/#team",
    element: <Team />,
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