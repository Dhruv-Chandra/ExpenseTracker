import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        newTitle: '',
        newDate: '',
        newAmount: '',
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

        props.onSaveExpenseForm(userInput)

        clearForm()
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        value={userInput.newTitle}
                        onChange={titleChange}
                        className='new-expense__input'
                        placeholder='Enter Expense Name'
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter Expense Name'} />
                </div>
            </div>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                        value={userInput.newDate}
                        min="2019-01-1"
                        max="2022-12-31"
                        onChange={dateChange}
                        className='new-expense__input' />
                </div>
            </div>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                        value={userInput.newAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChange}
                        className='new-expense__input'
                        placeholder='Enter Expense Amount'
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Enter Expense Amount'} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm