import "../App.scss"
function TimeAndDate() {
    const myCurrentDate = new Date();
    var time =  myCurrentDate.getHours() +":" + myCurrentDate.getMinutes()  + " " 
    return (
        <div className="timeDate">
            <h4>{time}</h4>
        </div>
    )

}

export default TimeAndDate;