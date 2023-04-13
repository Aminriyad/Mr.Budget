import {redirect} from "react-router"

import deleteItem from "../helpers"

const logoutaction = () =>{
    //delete the user
    deleteItem({key:"userName"})
    //redirect to home page
    return redirect("/")
}
export default logoutaction