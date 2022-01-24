import '../../App.scss';


function FreezerOverview() {
    return (
        <div className="overview-tile">
            <h1 className="d-f-col">Freezer</h1>
            <div className="d-f-col">
                <h2>Target Pallet speed (Minutes) :</h2>
                <h1 className="palletTime">45</h1>
            </div>
            <div className="d-f-col">
                <h2>Average speed (Minutes) :</h2>
                <h1 className="palletTime">49</h1>
            </div>
        </div>
    )
}

export default FreezerOverview;