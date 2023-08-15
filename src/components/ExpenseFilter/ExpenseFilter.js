import { useState } from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const [filterText, setFiltertext] = useState('Nil  ')

    const selectValueHandler = (e) => {
        let tempTextStore = ''
        if (e.target.value === "(None)") {
            tempTextStore = 'Nil  '
        }
        else {
            for (let year of props.years) {
                if (year.toString() !== e.target.value) {
                    tempTextStore = tempTextStore + year.toString() + ', '
                }
            }
        }
        setFiltertext(tempTextStore)
        props.filterYear(e.target.value)
    }

    return (
        <div className='expense__filter' >
            <p className='expense__filter_text'>Filter by Year: </p>
            <select className='expense__filter_box' value={props.selected} onChange={selectValueHandler}>
                {props.years.map((y) => (
                    <option key = {y} value={y.toString()}>{y}</option>
                ))}
            </select>
            {/* <p className='expense__filter_text'>Years not shown below are: {filterText.slice(0, -2)}</p> */}
        </div>
    )
}

export default ExpenseFilter;