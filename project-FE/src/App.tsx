import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home"
import Credentials from "./routes/Credentials";
import Profile from "./routes/Profile";
import ProfileCity from "./routes/ProfileCity";
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