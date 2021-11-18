import {useState} from 'react'
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
function Expenses(props) {
  const [year,setYear]=useState('2020')
  const filterChangeHandler=(selectedYear)=>{
    setYear(selectedYear)
  };
  return (
    <div className="expenses">
      <ExpensesFilter selected={year} onFilterChange={filterChangeHandler}/>
      <ExpenseItem 
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
    </div>
  );
}

export default Expenses;
