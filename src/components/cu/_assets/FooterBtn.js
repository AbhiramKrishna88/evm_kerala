import React, { useState } from 'react'

const FooterBtn = () => {
    const [Total,setTotal] = useState("hello")
    const ballotOn=()=>{setTimeout(() => setTotal("hellochanged"),5000);}
    console.log(Total)
    
    return (
        <div className="align-items-start d-flex justify-content-between d-flex w-100 bottom-0 card-footer">
            <button className="card-link btn btn-primary py-1 px-3 r-25" >Total</button>
            <button className="card-link btn btn-primary p-5" onClick={ballotOn}>Ballot</button>
        </div>

    )
}

export default FooterBtn
