import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Dashboard, {dashboardloader} from "./pages/Dashboard"
import Main, { mainloader} from "./layouts/Main"
import Error from "./pages/Error"
import logoutaction from "./actions/logouts"
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
        </div>
        </>
    );
}

export default App;