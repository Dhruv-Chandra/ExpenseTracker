import './ExpenseItem.css'
import { useState } from 'react'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../Card/Card'

function ExpenseItem(props) {
    const amount = props.expense.amount
    const date_of_expense = props.expense.date
    const [title, setTitle] = useState(props.expense.title);

    const changeTitle = () => {
        setTitle('Updated!!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date_of_expense={date_of_expense}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">Rs. {amount}</div>
            </div>
            <button onClick={changeTitle} className='expense-item__button'>
                Change Title
            </button>
        </Card>
    )
}

export default ExpenseItem