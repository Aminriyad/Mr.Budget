import React from 'react'
import { fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom'
import Table from '../components/Table';
import { deleteItem } from '../helpers';
import { toast } from 'react-toastify';

export const expensesloader = () => {
    const expenses = fetchData("expenses");
    return {expenses}}

export const expensesAction = async ({request}) =>{
    const data = await request.formData();
    const {_action, ...values}= Object.fromEntries(data)

    if(_action === "deleteExpense"){
        try{
            //create an Expense
            deleteItem({
                key:"expenses",
                id:values.expenseId
            })
            return toast.success(`Expense Deleted`)
        }
        catch(e){
            throw new Error("there was a problem Deleting your expense")
        }
    }
}
const ExpensesPage = () => {
        const {expenses} = useLoaderData()
    return (
    <div>
        <div className="grid-lg">
            <h1>All Expenses</h1>
            {
            expenses && expenses.length > 0
            ? (
                <div className="grid-md">
                    <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
                    <Table expenses={expenses }/>
                </div>
            )
            :
            <p>No Expenses to Show</p>
            }
        </div>
    </div>
)
}

export default ExpensesPage
