import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Inspiration from "./Component/Inspiration";
import Offerings from "./Component/Offerings";
import Careers from "./Component/Careers";
import ContactUs from "./Component/ContactUs";
import ErrorPage from "./Component/ErrorPage";
import SuccessStories from "./Component/SucessStories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/inspiration", element: <Inspiration /> },
        { path: "/successtories", element: <SuccessStories /> },
        { path: "/offering", element: <Offerings /> },
        { path: "/careers", element: <Careers /> },
        { path: "/contactus", element: <ContactUs /> },
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
