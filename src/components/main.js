import '../App.scss';
import Produce from "./main-components/produce.js"
import Bread from "./main-components/bread.js"
import Shortlife from "./main-components/shortlife-chiller.js"
import Longlife from "./main-components/longlife-chiller.js"
import Freezer from "./main-components/freezer.js"
import Ambient from "./main-components/ambient"



function Main() {
    return (
        <div className="main">
            <Produce/>
            <Bread/>
            <Shortlife/>
            <Longlife/>
            <Freezer/>
            <Ambient/>
        </div>
    )

}

export default Main;