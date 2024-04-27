import {
  createBrowserRouter,
 
} from "react-router-dom";
import Root from "./Root";
import HomePage from "./HomePage";
import AddTouristSpot from "./AddTouristSpot";
import AllTouristSpot from "./AllTouristSpot";
import MyList from "./MyList";

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
        },
        {
          path:'/AllTouristSpot',
          element:<AllTouristSpot></AllTouristSpot>
        },
        {
          path:'/MyList',
          element:<MyList></MyList>
        }
      ]
    },
  ]);

  export default router;