import {Link} from 'react-router-dom'

function LinkBar(){
    return(
        <div className="text-center d-flex justify-content-evenly">
            <Link to="/">Home</Link>
            <Link to="/buysomething">Buy Something</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default LinkBar;