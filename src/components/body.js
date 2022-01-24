import '../App.scss';
import Header from './header';
import Content from './content';

function Body() {
    return (
        <div className="d-f-col body">
            <Header/>
            <Content/>
        </div>
    )

}

export default Body;