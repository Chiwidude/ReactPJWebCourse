import Entry from './Entry';
import "./entry.css"
import Header from "../../common/header"
const EntryScreen = (props) => {

    return (
    <div className = "background-entry">
        <Header />
        <Entry title = {props.title}/>
    </div>)
}

export default EntryScreen;