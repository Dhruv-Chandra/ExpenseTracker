import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from '../Card/Card'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"
import { useState } from "react";

const Expenses = (props) => {

    const [year, setYear] = useState('')

    const getFilterYear = gotYear => {
        setYear(gotYear)
    }

    const filteredExpenses = props.expense.filter(exp => {
        return exp.date.getFullYear().toString() === year
    })

    return (
        <Card className="expenses">
            <ExpenseFilter filterYear={getFilterYear}></ExpenseFilter>

            {year.toString() === 'None' ? (
                props.expense.map((exp) => (
                    (<ExpenseItem key={exp.id} expense={exp}></ExpenseItem>)
                )
            )) : (
                filteredExpenses.map((exp) => (
                    (<ExpenseItem key={exp.id} expense={exp}></ExpenseItem>)
                ))
            )}
        </Card>
    )
}

export default Expenses