import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import Home from "./routes/Home"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },{
    path:"/login",
    //Temporary set up
    element: <Home/>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}