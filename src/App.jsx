import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Offerings from "./Component/Offerings";
import Careers from "./Component/Careers";
import ContactUs from "./Component/ContactUs";
import ErrorPage from "./Component/ErrorPage";
import SuccessStories from "./Component/SucessStories";
import Project1 from "./Component/Project1";
import Project2 from "./Component/Project2";
import Project3 from "./Component/Project3";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/successtories", element: <SuccessStories /> },

        { path: "/successtories/project1", element: <Project1 /> },
        { path: "/successtories/project2", element: <Project2 /> },
        {
          path: "/successtories/project3",
          element: <Project3 />,
        },
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
