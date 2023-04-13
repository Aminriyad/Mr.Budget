//helper functions
import { useLoaderData } from "react-router";
import { fetchData } from "../helpers";
export const dashboardloader=()=>{
    const userName = fetchData("userName")
    return { userName}
}
const Dashboard = () => {
    const {userName} = useLoaderData()
    return (
        <>
        <div>Hey this is dashboard</div>
        </>
    );
}

export default Dashboard;