import React from 'react'
//import votersContext from '../context/votersContext'
//import Data from "../data.json";

const Toolbar = () => {

    // const {_compartment2Open,_CU_On} = useContext(votersContext)
    // const [compartment2Open,setCompartment2Open] = _compartment2Open;
    // const [CU_On,setCU_On] = _CU_On;

    const LocalData = JSON.parse(localStorage.getItem('EvM'));
    console.log(LocalData);
    console.log(LocalData.on);
    const setOn = () => {
        LocalData.on = !LocalData.on;
        localStorage.setItem('EvM', JSON.stringify(LocalData));
    }
    return (
        <div className="toolbar">
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={()=>(setOn)}>On</button>
                {/* <button type="button" className="btn btn-secondary" onClick={()=>(setCompartment2Open())}>Open Compartment 2</button>*/}
                <button type="button" className="btn btn-secondary" disabled>Connect</button>
            </div>
        </div>
    )
}

export default Toolbar
