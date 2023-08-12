import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        newTitle: "",
        newDate: "",
        newAmount: "",
    })

    const titleChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                newTitle: event.target.value
            }
        })
    }

    const amountChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                newAmount: event.target.value
            }
        })
    }

    const dateChange = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                newDate: event.target.value
            }
        })
    }

    const clearForm = () => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                newTitle: '',
                newDate: '',
                newAmount: ''
            }
        });
    }

    const submitFormHandler = (event) => {
        event.preventDefault()

        props.onSaveExpenseForm()

        clearForm()        
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.newTitle} onChange={titleChange} />
                </div>
            </div>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={userInput.newDate} min="2019-01-01" max="2022-12-31" onChange={dateChange} />
                </div>
            </div>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={userInput.newAmount} min="0.01" step="0.01" onChange={amountChange} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm