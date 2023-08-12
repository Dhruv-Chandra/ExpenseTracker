import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css';
import Card from '../Card/Card'

const Expenses = (props) => {

    
    return (
        <Card className = "expenses">
            <ExpenseItem expense={props.expense[0]}></ExpenseItem>
            <ExpenseItem expense={props.expense[1]}></ExpenseItem>
            <ExpenseItem expense={props.expense[2]}></ExpenseItem>
            <ExpenseItem expense={props.expense[3]}></ExpenseItem>
        </Card>
    )
}

export default Expenses