import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home"
import Credentials from "./routes/Credentials";
import Profile from "./routes/Profile";
import ProfileCity from "./routes/ProfileCity";
import ResetPasswordForm from "./components/ResetPasswordForm";
import Test from "./components/Test";
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
    // element: <ForgotPasswordForm></ForgotPasswordForm>
    element:<Test></Test>
  },
  {
    path:"/reset-password",
    element: <ResetPasswordForm></ResetPasswordForm>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}