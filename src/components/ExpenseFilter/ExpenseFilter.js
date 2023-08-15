import { useState } from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

    const years = [
        2019,
        2020,
        2021,
        2022
    ]

    const [filterText, setFiltertext] = useState('Nil  ')

    const selectValueHandler = (e) => {
        let tempTextStore = ''
        if (e.target.value === "(None)") {
            tempTextStore = 'Nil  '
        }
        else {
            for (let year of years) {
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
                <option value="None">None</option>
                <option value="2019">{years[0]}</option>
                <option value="2020">{years[1]}</option>
                <option value="2021">{years[2]}</option>
                <option value="2022">{years[3]}</option>
            </select>
            {/* <p className='expense__filter_text'>Years not shown below are: {filterText.slice(0, -2)}</p> */}
        </div>
    )
}

export default ExpenseFilter;