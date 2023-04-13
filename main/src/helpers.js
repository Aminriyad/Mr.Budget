// All local storage function is here
export const fetchData = (key) => JSON.parse(localStorage.getItem(key))
const deleteItem = ({key}) =>{
    return localStorage.removeItem(key)
}
export default deleteItem
