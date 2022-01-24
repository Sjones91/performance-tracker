import '../App.scss';


function Nav() {
    const handler = () => {
        alert("feature to add")

    }
    return (
        <div className="d-f-col nav">
            <ul className="nav-list d-f-row">
                <li className="nav-item" onClick={handler}>Store Overview</li>
                <li className="nav-item" onClick={handler}>Employees</li>
                <li className="nav-item" onClick={handler}>New Task</li>
            </ul>

        </div>
    )

}

export default Nav;