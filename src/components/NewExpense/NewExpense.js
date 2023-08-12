import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const addExpenseData = (userInput) => {
        const newExpenseData = {
            ...userInput,
            id: Math.random.toString()
        }
        props.addingExpenseToApp(newExpenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm = {addExpenseData}></ExpenseForm>
        </div>
    )
}

export default NewExpense