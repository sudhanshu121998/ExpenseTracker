import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props)=>{
    const [enteredtitle,setenteredTitle]=useState('');
    const [enteredamount,setenteredAmount]=useState('');
    const [enteredDate,setenteredDate]=useState('');
    /*Alternate way of using Multiple states 
    const [userInput,setUserInput]=useState({
        enteredtitle:''
        enteredamount:''
        enteredDate:''
    });
    */

    /*event is a default javascript object which gives the value in the field with several properties */
    const titleChangeHandler =(event)=>{
        /*event.target.value gives the current value in field */
        setenteredTitle(event.target.value);
        /*With Second approach need to update complete object and it is used when state
        depends on previous state

        setUserInput(prevState)=>{
            return{...userInput,enteredtitle:event.target.value};
        });
        */
    }
    const amountChangeHandler =(event)=>{
        setenteredAmount(event.target.value);

    }
    const dateChangeHandler =(event)=>{
        setenteredDate(event.target.value);
    }

    const submitHandler=(event)=>{
        /*Prevents the default reload of page when form is submitted */
        event.preventDefault();

        /*Combine all values in single object */
        const expenseData={
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(enteredDate)
        };
        /*After form is submitted lets reset the placeholders */
        props.onSaveExpenseData(expenseData); /*Called the function of parent component(NewExpense) */
        setenteredTitle('')
        setenteredAmount('')
        setenteredDate('')
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    onChange={titleChangeHandler}
                    value={enteredtitle}/>      
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' 
                    onChange={amountChangeHandler}
                    value={enteredamount}/>      
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}
                    value={enteredDate}/>      
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;