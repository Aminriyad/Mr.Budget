import {redirect} from "react-router-dom"
import { toast } from "react-toastify"

import deleteItem from "../helpers"

const logoutaction = async () =>{
    //delete the user
    deleteItem({key:"userName"})
    /* 1. Delete so user don't exist in their LocalStorage */
    toast.success("you've deleted your account")
    /* 2. show them a sign on the the top-left corner that they have logged out */
    /* toastify allow pending, error , success */
    //redirect to home page
    return redirect("/") //re-direct
    /* 3. direct the user to the main page so they will be able to input another name */
}
export default logoutaction