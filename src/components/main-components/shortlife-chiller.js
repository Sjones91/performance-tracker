import '../../App.scss';


function ShortLifeOverview() {
    return (
        <div className="overview-tile">
            <h1 className="d-f-col">Shortlife Chiller</h1>
            <div className="d-f-col">
                <h2>Target Pallet speed (Minutes) :</h2>
                <h1 className="palletTime">30</h1>
            </div>
            <div className="d-f-col">
                <h2>Average speed (Minutes) :</h2>
                <h1 className="palletTime">28</h1>
            </div>

        </div>
    )

}

export default ShortLifeOverview;