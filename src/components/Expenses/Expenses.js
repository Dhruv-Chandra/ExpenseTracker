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

    // const func = (props) => {
    //     if (props.year === "(None)") {
    //         props.expense.map((exp) => (
    //             (<ExpenseItem expense={exp}></ExpenseItem>)
    //         ))
    //     }
    //     else {
    //         {
    //             props.expense.map((exp) => (
    //                 exp.date.getFullYear() === props.year
    //                     ? (<ExpenseItem expense={exp}></ExpenseItem>)
    //                     : null
    //             ))
    //         }
    //     }
    // }

    return (
        <Card className="expenses">
            <ExpenseFilter filterYear={getFilterYear}></ExpenseFilter>
            {/* {console.log(year)} */}

            {/* {() => {
                year !== "(None)"
                    ? props.expense.map((exp) => (
                        console.log(year)
                        (<ExpenseItem expense={exp}></ExpenseItem>)
                    ))
                    : props.expense.map((exp) => (
                        exp.date.getFullYear() === props.year
                            ? (<ExpenseItem expense={exp}></ExpenseItem>)
                            : null
                    ))
            }} */}
            {props.expense.map((exp) => (
                (<ExpenseItem expense={exp}></ExpenseItem>)
            ))}
        </Card>
    )
}

export default Expenses