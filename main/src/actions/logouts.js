import {redirect} from "react-router"
import { toast } from "react-toastify"

import deleteItem from "../helpers"

const logoutaction = async () =>{
    //delete the user
    deleteItem({key:"userName"})
    toast.success("you've deleted your account")
    //redirect to home page
    return redirect("/") //re-direct
}
export default logoutaction