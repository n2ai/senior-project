import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home"
import Credentials from "./routes/Credentials";
import Profile from "./routes/Profile";
import ProfileStageChoosing from "./components/profile/ProfileStageChoosing";
import TutorialLevel from "./components/profile/tutorial/TutorialLevel";
import ProfileCity from "./routes/ProfileCity";
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
    path:"/profile/:id/city/",
    element:<ProfileCity/>,
    children:[
      {
        path:"tutorial",
        element: <TutorialLevel/>
      }
    ]
  },
  {
    path:"/test",
    element: <ProfileStageChoosing/>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}