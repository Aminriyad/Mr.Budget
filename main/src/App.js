import {createBrowserRouter,  RouterProvider} from "react-router-dom"
import Dashboard, {dashboardAction, dashboardloader} from "./pages/Dashboard"
import Main, { mainloader} from "./layouts/Main"
import Error from "./pages/Error"
import logoutaction from "./actions/logouts"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, { expensesAction } from "./pages/ExpensesPage"
import { expensesloader } from "./pages/ExpensesPage"
import BudgetPage, { budgetLoader, budgetloader } from "./pages/BudgetPage"
import deleteBudget from "./actions/deleteBudget"
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
            action:dashboardAction,
            errorElement:<Error/>,
        },
        {
            path:"expenses",
            element: <ExpensesPage  />,
            loader: expensesloader,
            action:expensesAction,
            errorElement:<Error/>,
        },
        {
            path:"budget/:id",
            element: <BudgetPage />,
            loader: budgetLoader,
            action:expensesAction,
            errorElement:<Error/>,
            children:[
                {
                    path:"delete",
                    action:deleteBudget,
                }
            ]
        },
        {
            path:"logout",
            action: logoutaction,
            //what function should run when you go in this route
        },{
            path: "*",
            element: <Error/>,
            },
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
        <ToastContainer draggable/> {/* To get it in all of the routes */}
        </div>
        </>
    );
}

export default App;