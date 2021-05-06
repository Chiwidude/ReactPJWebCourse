import EntryViewer from "./entryViewer";
import "../entries/entry.css"
import Header from "../../common/header"
const ViewScreen = (props) => {

    return (
    <div className = "background-entry">
        <Header />
        <EntryViewer edit={props.edit} title = {props.title}/>
    </div>)
}

export default ViewScreen;