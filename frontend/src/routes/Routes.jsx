import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/checkout",
                element:<div>checkout</div>
            },
            {
                path:"/cart",
                element:<div>cart</div>
            },
            {
                path:"/orders",
                element:<div>orders</div>
            },
            {
                path:"/user-dashboard",
                element:<div>user-dashboard</div>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>

            }
        ]

    }
])

export {router}