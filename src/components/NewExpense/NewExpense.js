import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const addExpenseData = (userInput) => {
        const newExpenseData = {
            id: Math.random.toString(),
            title: userInput.newTitle,
            amount: userInput.newAmount,
            date: new Date(userInput.newDate),           
        }
        props.addingExpenseToApp(newExpenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm={addExpenseData}></ExpenseForm>
        </div>
    )
}

export default NewExpense