import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date_of_expense.toLocaleString('en-US', { month: 'long' })
    const year = props.date_of_expense.getFullYear()
    const day = props.date_of_expense.toLocaleString('en-US', { day: '2-digit' })

    return (
        <div className = "expense-date"> 
            <div className = "expense-date__month">
                {month}
            </div>
            <div className = "expense-date__year">
                {year}
            </div>
            <div className = "expense-date__day">
                {day}
            </div>
        </div>
    )
}

export default ExpenseDate