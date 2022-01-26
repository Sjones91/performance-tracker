
function TimeAndDate() {
    const myCurrentDate = new Date();
    var date = myCurrentDate.getHours() +":" + myCurrentDate.getMinutes()  + " " + myCurrentDate.getDate() + "." + (myCurrentDate.getMonth()+1) + "." + myCurrentDate.getFullYear()

    return (
        <p>{date}</p>
    )

}

export default TimeAndDate;