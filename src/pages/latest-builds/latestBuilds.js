
import {useState, useEffect} from 'react';
import Template from "../../common/readView"
import {getAll} from "../../services/builds.service";
const Builds = () => {
const[builds, setBuilds] = useState([]);
//    builds.current = JSON.parse(localStorage.getItem("data-builds"));
    useEffect(()=> {
        const getBuilds = async () => {
          const build =  await getAll();          
          setBuilds(build.builds);                    
        }
        getBuilds();        
    },[]);
    
    return (
        <Template path="/create-build" object={builds}></Template>
    )
}

export default Builds;