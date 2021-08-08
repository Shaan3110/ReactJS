import React,{useState} from 'react'
import SResults from './SResults';
import './stylesheets/Search.css'

const Search = () => {
    const [Sear, setSear] = useState("");
    const changed = (event) =>{
        setSear(event.target.value);
    }
    return (
        <>
        <div className="search">
            <input type="text" placeholder="Search" onChange={changed} value={Sear}/>
        </div>
        {
        Sear!==""?<SResults img={Sear}/>:null
        }
        </>
    )
}

export default Search
