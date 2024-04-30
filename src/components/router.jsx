import {
  createBrowserRouter,
 
} from "react-router-dom";
import Root from "./Root";
import HomePage from "./HomePage";
import AddTouristSpot from "./AddTouristSpot";
import AllTouristSpot from "./AllTouristSpot";
import MyList from "./MyList";
import Register from "./Register/Register";
import Login from "./Login/Login";
import SelectedTouristSpotsViewDetails from "./SelectedTouristSpots/SelectedTouristSpotsViewDetails";
import AllTouristSpotViewDetailsCard from "./AllTouristSpotViewDetailsCard";
import UpdatePage from "./UpdatePage/UpdatePage";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import SimilarCountries from "./AllCountries/SimilarCountries";
import Error from "./Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:'/AddTouristSpot',
            element:<PrivateRouter><AddTouristSpot></AddTouristSpot></PrivateRouter>
        },
        {
          path:'/AllTouristSpot',
          element:<AllTouristSpot></AllTouristSpot>
        },
        {
          path:'/MyList/:name',
          loader:({params})=>fetch(`http://localhost:5001/myList/${params.name}`),
          element:<PrivateRouter><MyList></MyList></PrivateRouter>
        },
        {
          path:'/Register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/selectedTouristSpot/:id',
          loader:(({params})=>fetch(`http://localhost:5001/touristSpot/${params.id}`)),
          element:<PrivateRouter><SelectedTouristSpotsViewDetails></SelectedTouristSpotsViewDetails></PrivateRouter>

        },
        {
          path:'/allTouristSpot/:id',
          loader:(({params})=>fetch(`http://localhost:5001/touristSpot/${params.id}`)),
          element:<AllTouristSpotViewDetailsCard></AllTouristSpotViewDetailsCard>
        },
        {
          path:'/updatePage/:id',
          loader:(({params})=>fetch(`http://localhost:5001/touristSpot/${params?.id}`)),
          element:<PrivateRouter><UpdatePage></UpdatePage></PrivateRouter>
        },
        {
          path:'/specificCountrie/:countryName',
          loader:({params})=>fetch(`http://localhost:5001/specificCountrie/${params?.countryName}`),
          element:<SimilarCountries></SimilarCountries>
        }

      ]
    },
  ]);

  export default router;