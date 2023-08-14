import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from '../Card/Card'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"

const Expenses = (props) => {
    return (
        <Card className = "expenses">
            <ExpenseFilter></ExpenseFilter>
            <ExpenseItem expense={props.expense[0]}></ExpenseItem>
            <ExpenseItem expense={props.expense[1]}></ExpenseItem>
            <ExpenseItem expense={props.expense[2]}></ExpenseItem>
            <ExpenseItem expense={props.expense[3]}></ExpenseItem>
        </Card>
    )
}

export default Expenses