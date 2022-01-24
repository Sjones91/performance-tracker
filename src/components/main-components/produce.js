import '../../App.scss';


function ProduceOverview() {
    return (
        <div className="overview-tile">
            <h1 className="d-f-col">Produce</h1>
            <div className="d-f-col">
                <h2>Target Pallet speed (Minutes) :</h2>
                <h1 className="palletTime">15</h1>
            </div>
            <div className="d-f-col">
                <h2>Average speed (Minutes) :</h2>
                <h1 className="palletTime">17</h1>
            </div>

        </div>
    )

}

export default ProduceOverview;