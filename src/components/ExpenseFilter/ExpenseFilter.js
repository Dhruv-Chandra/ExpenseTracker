import './ExpenseFilter.css'

const ExpenseFilter = () => {

    const years = [
        '2019',
        '2020',
        '2021',
        '2022'
    ]

    return (
        <div className='expense__filter' >
            <p className='expense__filter_text'>Filter by Year: </p>
            <select className='expense__filter_box'>
                <option value="2019">{years[0]}</option>
                <option value="2020">{years[1]}</option>
                <option value="2021">{years[2]}</option>
                <option value="2022">{years[3]}</option>
            </select>
        </div>
    )
}

export default ExpenseFilter