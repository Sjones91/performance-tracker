import '../../App.scss';


function LongLifeOverview() {
    return (
        <div className="overview-tile">
            <h1 className="d-f-col">Longlife Chiller</h1>
            <div className="d-f-col">
                <h2>Target Pallet speed (Minutes) :</h2>
                <h1 className="palletTime">40</h1>
            </div>
            <div className="d-f-col">
                <h2>Average speed (Minutes) :</h2>
                <h1 className="palletTime">40</h1>
            </div>
        </div>
    )

}

export default LongLifeOverview;