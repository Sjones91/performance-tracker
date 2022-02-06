import '../App.scss';
import TimeAndDate from '../functions/time';


function Header() {
    return (
        <div className="header d-f-col">
            <h1 className="headTitle d-f-row ">Employee Performance Tracker</h1>
            <TimeAndDate className="timeDate"></TimeAndDate>
            
        </div>
    )
}

export default Header;