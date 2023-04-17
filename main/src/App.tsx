import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Dashboard, {dashboardloader} from "./pages/Dashboard"
import Main, { mainloader} from "./layouts/Main"
import Error from "./pages/Error"
import logoutaction from "./actions/logouts"
import { ToastContainer } from "react-toastify"
const router = createBrowserRouter([
    {
    path: "/",
    element: <Main/>,
    loader: mainloader,
    errorElement:<Error/>,
    children:[
        {
            index: true,
            path:"/",
            element: <Dashboard />,
            loader: dashboardloader,
            errorElement:<Error/>,
        },
        {
            path:"logout",
            action: logoutaction,
            //what function sould run when you go in this route
        }
    ]
},
    {
        path: "*",
        element: <Error/>,
        },
]);

const App = () => {
    return (
        <>
        <div className={"App"}>
        <RouterProvider router={router} />
        <ToastContainer />
        </div>
        </>
    );
}

export default App;