import {
  createBrowserRouter,
 
} from "react-router-dom";
import Root from "./Root";
import HomePage from "./HomePage";
import AddTouristSpot from "./AddTouristSpot";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:'/AddTouristSpot',
            element:<AddTouristSpot></AddTouristSpot>
        }
      ]
    },
  ]);

  export default router;