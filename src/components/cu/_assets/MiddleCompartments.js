import React, { useState } from 'react'
import Data from "../../../data.json";
//import '../../animate_css/animate.css'
//import votersContext from '../../../../context/votersContext'

const MiddleCompartments = () => {

    const [lidOpen, setLidOpen] = useState(false)
    //const {_compartment2Open} = useContext(votersContext)
    //const [compartment2Open] = _compartment2Open;

    //const [compartment2_In_Open, setCompartment2_In_Open] = useState(false)
    console.log(Data)
    return (
        <div className="card-body p-0 mt-4" >
          <div className="row d-block h-100 w-100 ml-3 my-auto">
            <div className="row w-100 h-40">
                <div className="col h-100 p-0">
                    <div className="card text-white bg-primary mb-3 d-inline-block w-100 h-100">
                        <div className="card-body">
                            
                        </div>
                      </div>
                </div>
            </div>
            <br></br>
            <div className={`row w-100 h-40 ${Data.compartment2Open?"swing-right-fwd":""}`}>
                <div className="col h-100 p-0">
                    <div className="card text-white bg-primary mb-3 d-inline-block w-100 h-100">
                        <div className="card-body h-100">
                            
                            <span className={`badge badge-danger bg-dark px-3 py-2 r-25 lid ${lidOpen?"swing-left-fwd":""}`} onClick={()=>(setLidOpen(!lidOpen))} >.</span>
                            <button className="btn btn-dark closeBtn px-3 py-1 ml-4 mt-4 r-25 text-white">Close</button>
                            
                        </div>
                      </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default MiddleCompartments
