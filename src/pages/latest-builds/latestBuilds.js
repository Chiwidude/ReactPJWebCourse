import Template from "../../common/readView"

const Builds = () => {

const builds = JSON.parse(localStorage.getItem("data-builds"))
    return (
        <Template object={builds}></Template>
    )
}

export default Builds;