export const waait = () => new Promise(res => setTimeout(res, Math.random()*800))

// All local storage function is here
export  const fetchData = (key) => JSON.parse(localStorage.getItem(key))

// export const deleteItem = ({key}) =>{
//     return localStorage.removeItem(key)
// }
const GenerateRandomColor =()=>{
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}
export const createBudget = ({
    name, amount
}) =>{
    const newItem = {
        id: crypto.randomUUID(),
        name:name,
        createdAt: Date.now(),
        amount:+amount, //the + make it a number
        color: GenerateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? [] //if it doesnt exist return empty array
    return localStorage.setItem("budgets",JSON.stringify([...existingBudgets,newItem]))
}
export const createExpense = ({
    name, amount, budgetId
}) =>{
    const newItem = {
        id: crypto.randomUUID(),
        name:name,
        createdAt: Date.now(),
        amount:+amount, //the + make it a number
        budgetId: budgetId
}
    const existingExpenses = fetchData("expenses") ?? [] //if it doesnt exist return empty array
    return localStorage.setItem("expenses",JSON.stringify([...existingExpenses,newItem]))
}

export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "USD"
    })
}

export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => {
      // check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc
      // add the current amount to my total
    return acc += expense.amount
    }, 0)
    return budgetSpent;
}

export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
    })
}

export const formatDateToLocaleString= (epoch) =>{
    return new Date(epoch).toLocaleDateString();
}
export const getAllMatchingItems=({category, key,value})=>{
    const data = fetchData(category)??[]
    return data.filter((item)=>item[key]=== value)
}

export const deleteItem = ({key,id})=>{
    const existingData = fetchData(key)
        if(id){
            const newData = existingData.filter((item)=>item.id !== id);
            return localStorage.setItem(key,JSON.stringify(newData))
        }
    return localStorage.removeItem(key)
}