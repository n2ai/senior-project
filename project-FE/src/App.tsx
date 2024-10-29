import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home"
import Credentials from "./routes/Credentials";
import Profile from "./routes/Profile";
import ProfileStageChoosing from "./components/profile/ProfileStageChoosing";
import TutorialLevel from "./components/profile/tutorial/TutorialLevel";
import ProfileCity from "./routes/ProfileCity";
import ProfileCuisineSwiper from "./components/profile/ProfileCuisineSwiper";
import LoadingScreen from "./components/LoadingScreen";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },{
    path:"/credentials",
    //Temporary set up
    element: <Credentials/>
  },{
    path:"/profile/:id",
    element: <Profile/>,
  },{
    path:"/profile/:id/city/:cityId",
    element:<ProfileCity/>,
    
  },
  {
    path:"/test",
    element: <LoadingScreen></LoadingScreen>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}