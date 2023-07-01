import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Components/Layout/Main";
// import About from "../Components/About/About";
// import Services from "../Components/Services/Services";
// import Work from "../Components/Work/Work";
// import Contact from "../Components/Contact/Contact";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        // {
        //   path: "about",
        //   element:<About></About> ,
        // },
        // {
        //   path: "services",
        //   element: <Services></Services> ,
        // },
        // {
        //   path: "work",
        //   element: <Work></Work> ,
        // },
        // {
        //   path: "contact",
        //   element: <Contact></Contact> ,
        // }

      ]
    },
  ]);