//helper functions
import { Outlet, useLoaderData } from "react-router";
import { fetchData } from "../helpers";

//Components
import Nav from "../components/Nav";

// assets
import wave from "../assests/wave.svg"

export const mainloader=()=>{const userName = fetchData("userName"); return { userName}}
const Main = () => {
    const {userName} = useLoaderData()
    return (
        <div className={"layout"}>
        <Nav userName={userName}/>
        <main>
        <Outlet /> {/* AKA childern */}
        </main>
        {userName}
        <img src={wave} alt="" />
        </div>
    );
}

export default Main;