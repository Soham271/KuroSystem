import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Inspiration from "./Component/Inspiration";
import Offerings from "./Component/Offerings";
import Careers from "./Component/Careers";
import ContactUs from "./Component/ContactUs";
import ErrorPage from "./Component/ErrorPage";
import SucessStories from "./Component/SucessStories";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    { path: "/inspiration", element: <Inspiration /> },
    { path: "/suceestories", element: <SucessStories /> },
    { path: "/offering", element: <Offerings /> },
    { path: "/careers", element: <Careers /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
