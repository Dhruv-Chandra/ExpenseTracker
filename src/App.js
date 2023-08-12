import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
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
    }
  ] 

  const addExpenseDataOnApp = newExpense => {
    console.log('App.js at')
  }

  return (
    <div>
      <NewExpense addingExpenseToApp={addExpenseDataOnApp}></NewExpense>
      <Expenses expense={expenses}></Expenses>      
    </div>
  );
}

export default App;