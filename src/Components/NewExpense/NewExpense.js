import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        /*Copied the value of enteredExpenseData which passed from Child component and 
        Added id attribute to expenseData variable  */
        const expense={
        ...enteredExpenseData,
        id:Math.random().toString()
        };
        /*sending data to parent component(App.js) */
        props.onaddExpenseData(expense);
    };
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );

}

export default NewExpense;