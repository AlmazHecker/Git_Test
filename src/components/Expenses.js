import './Expenses.css'

function Expenses(props){
    return(
        <div className='Expenses'>
            {props.children}
        </div>
    )
}

export default Expenses;