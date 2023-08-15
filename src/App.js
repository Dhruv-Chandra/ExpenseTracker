import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter"

const tempExp = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 295,
    date: new Date(2017, 6, 3)
  },
  {
    id: '2',
    title: 'Bike Insurance',
    amount: 395,
    date: new Date(2018, 7, 4)
  },
  {
    id: '3',
    title: 'Truck Insurance',
    amount: 495,
    date: new Date(2019, 8, 5)
  },
  {
    id: '4',
    title: 'Cycle Insurance',
    amount: 595,
    date: new Date(2020, 9, 6)
  },
  {
    id: '5',
    title: 'Netflix',
    amount: 695,
    date: new Date(2021, 9, 6)
  },
  {
    id: '6',
    title: 'Prime',
    amount: 795,
    date: new Date(2022, 9, 6)
  },
  {
    id: '7',
    title: 'Hotstar',
    amount: 895,
    date: new Date(2023, 9, 6)
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(tempExp)

  const addExpenseDataOnApp = newExpense => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses]
    }
    )
  }

  return (
    <div>
      <NewExpense addingExpenseToApp={addExpenseDataOnApp}></NewExpense>
      {/* <ExpenseFilter expense={expenses}></ExpenseFilter> */}
      <Expenses expense={expenses}></Expenses>
    </div>
  );
}

export default App;