import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const addExpenseData = (userInput) => {
        // const [year, month, day] = userInput.date.toString().split('-')
        console.log()
        const newExpenseData = {
            ...userInput,
            // date: new Date(year, month, day),
            date: userInput.date,
            id: Math.random.toString()
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