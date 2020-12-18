import React,{useState} from 'react'
import '../animate_css/index.css'
import '../animate_css/animate.css'
//import HeadDisplay from './_assets/HeadDisplay'
//import MiddleCompartments from './_assets/MiddleCompartments'
//import FooterBtn from './_assets/FooterBtn'
//import {votersContext} from '../../context/votersContext'



const ControlUnit = () => {

  const [CU_On,setCU_On] = useState(false)
  const [disp1,setDisp1] = useState(".")
  const [disp2,setDisp2] = useState(".")
  const [light1On,setLight1On] = useState(false)
  const [light2On,setLight2On] = useState(false)
  const [Total,setTotal] = useState(0)
  const [lidOpen, setLidOpen] = useState(false)
  const [closePoll,setClosePoll] = useState(false)
  const [resultCheck,setResultCheck] = useState(false)

  const [compartment2Open,setCompartment2OPen] = useState(false);
  const [compartment2OpenIn,setCompartment2OPenIn] = useState(false);
  
  const ONOff = () => {
    setCU_On(!CU_On);
    turnOnEVM();
  }

  const compartment2Opening = () => {
    if(!compartment2OpenIn){
      setCompartment2OPen(!compartment2Open)
    }
  }

  const compartment2OpeningIn = () => {
    if(compartment2Open){
      setCompartment2OPenIn(!compartment2OpenIn);
    }
  }

  const turnOnEVM = () => {
    
    if(CU_On){
        setLight1On(true)
        setTimeout(() => {setDisp1("000000000000");setDisp2("000000000000");},2000);
        setTimeout(() => {setDisp1("     SEC    ");setDisp2("   KERALA   ");},4000);
        setTimeout(() => {setDisp1("DTE 12-11-20");setDisp2("TME 10-34-43");},6000);
        setTimeout(() => {setDisp1("SECCU 341031");setDisp2("SECDM 981232");},8000);
        setTimeout(() => {setDisp1(" NUMBER  OF ");setDisp2(`   POST 3   `);},10000);
        setTimeout(() => {setDisp1("   POST 1   ");setDisp2("10-100-23-1-");},12000);
        setTimeout(() => {setDisp1("  CANDS  3  ");setDisp2("  SEATS  1  ");},14000);
        setTimeout(() => {setDisp1("   POST 2   ");setDisp2("10-100-18---");},16000);
        setTimeout(() => {setDisp1("  CANDS  3  ");setDisp2("  SEATS  1  ");},18000);
        setTimeout(() => {setDisp1("   POST 3   ");setDisp2("10-34-------");},20000);
        setTimeout(() => {setDisp1("  CANDS  3  ");setDisp2("  SEATS  1  ");},22000);
        setTimeout(() => {setDisp1("  BATTERY   ");setDisp2("   HEIGH    ");},24000);
        setTimeout(() => {setDisp1("000000000000");setDisp2("000000000000");},26000);
        setTimeout(() => {setLight1On(false);},28000);
    }else{
      setDisp1(".");
      setDisp2(".");
    }
  }

  
  const Result1 = () => {
    if(CU_On){
    setResultCheck(true);
    setDisp1("POLL CLOSING"); 
    setTimeout(() => {setDisp1("DTE 12-11-20");setDisp2("TME 10-34-43");},2000);
    setTimeout(() => {setDisp1("SECCU 341031");setDisp2("SECDM 981232");},4000);
    setTimeout(() => {setDisp1(" NUMBER  OF ");setDisp2(`   POST 3   `);},6000);
    setTimeout(() => {setDisp1("TOTAL VOTERS");setDisp2(`      ${Total}      `);},8000);
    setTimeout(() => {setDisp1("   POST 1   ");setDisp2("10-100-23-1-");},10000);
    setTimeout(() => {setDisp1("10-100-23-1-");setDisp2(`TOTVOTES   ${Total}`);},12000);
    setTimeout(() => {setDisp1("   POST 2   ");setDisp2("10-100-18---");},14000);
    setTimeout(() => {setDisp1("10-100-18---");setDisp2(`TOTVOTES   ${Total}`);},16000);
    setTimeout(() => {setDisp1("   POST 3   ");setDisp2("10-34-------");},18000);
    setTimeout(() => {setDisp1("10-34-------");setDisp2(`TOTVOTES   ${Total}`);},20000);
    setTimeout(() => {setDisp1("POLL  CLOSED");setDisp2("000000000000");},22000);
    setTimeout(() => {setDisp1("000000000000");},24000);
    }
  }


  const CLear = () => {
    if(CU_On&&closePoll&&resultCheck){
    setDisp1("CLEAR"); 
    setTimeout(() => {setDisp1("DTE 12-11-20");setDisp2("TME 10-34-43");},2000);
    setTimeout(() => {setDisp1("SECCU 341031");setDisp2("SECDM 981232");},4000);
    setTimeout(() => {setDisp1("000000000000");setDisp2("000000000000");},6000);
    }else{
      
    }
  }



  const pollClosing = () => {
    if(CU_On){
    setClosePoll(true);
    setDisp1("POLL CLOSING"); 
    setTimeout(() => {setDisp1("DTE 12-11-20");setDisp2("TME 10-34-43");},2000);
    setTimeout(() => {setDisp1("SECCU 341031");setDisp2("SECDM 981232");},4000);
    setTimeout(() => {setDisp1(" NUMBER  OF ");setDisp2(`   POST 3   `);},6000);
    setTimeout(() => {setDisp1("TOTAL VOTERS");setDisp2(`      ${Total}      `);},8000);
    setTimeout(() => {setDisp1("   POST 1   ");setDisp2("10-100-23-1-");},10000);
    setTimeout(() => {setDisp1("10-100-23-1-");setDisp2(`TOTVOTES   ${Total}`);},12000);
    setTimeout(() => {setDisp1("   POST 2   ");setDisp2("10-100-18---");},14000);
    setTimeout(() => {setDisp1("10-100-18---");setDisp2(`TOTVOTES   ${Total}`);},16000);
    setTimeout(() => {setDisp1("   POST 3   ");setDisp2("10-34-------");},18000);
    setTimeout(() => {setDisp1("10-34-------");setDisp2(`TOTVOTES   ${Total}`);},20000);
    setTimeout(() => {setDisp1("POLL  CLOSED");setDisp2("000000000000");},22000);
    setTimeout(() => {setDisp1("000000000000");},24000);
    }
  }
  
  const ballotOn=()=>{
    if(CU_On && !closePoll){
        if(!light2On){
          setLight2On(true); 
          setTimeout(()=>{
            setTotal(Total+1);
            setLight2On(false);
          },5000);
        }else{
          setTimeout(() => {setDisp1("INVALID");},3000);
        }
      }
  }

  const TotalClick=()=>{
    if(CU_On){
    if(!light2On){
      setDisp1("Total");
      setDisp2(`VOTERS  ${Total}`);
      setTimeout(() => {setDisp1("000000000000");setDisp2("000000000000");},5000);
    }
  }
  }

  return (
    <div>
      <div>
          <button onClick={ONOff}>{CU_On?"Off":"On"}</button>
          <button onClick={compartment2Opening}>{compartment2Open?"Close Compartment":"Open Compartment"}</button>
          <button onClick={compartment2OpeningIn}>{compartment2OpenIn?"Close Inner Compartment":"Open Inner Compartment"}</button>
      </div>

        <div className="card h-100vh w-75vw">





        <div className="card-header text-center">
            <h6 className="card-title">SEC Kerala</h6>
            <h6 className="card-subtitle mb-2 text-muted">2020</h6>
          <div className="row mt-5 d-flex align-items-center mx-auto">
            <div className="col-2">
              <div className="d-flex flex-column align-items-center">
                <span className={`dot ${light1On?"light1On":""} bg-green`}></span>
                On
              </div>  
            </div>
            <div className="col-8">
              <div className="bg-danger text-light py-1 px-4 text-monospace">
                <div id="dis1">{disp1}</div>
                <div id="dis2">{disp2}</div>
              </div>
            </div>
            <div className="col-2 float-right d-flex justify-content-end">
              <div className="d-flex flex-column align-items-center">
                <span className= {`dot ${light2On?"light2On":""} bg-red`}></span>
                Busy
              </div>
            </div>
          </div>
        </div>






                <div className="card-body p-0 mt-4" >
          <div className="row d-block h-100 w-100 ml-3 my-auto">
            <div className="row w-100 h-40">
                <div className="col h-100 p-0">
                    <div className="card text-white bg-primary mb-3 d-inline-block w-100 h-100">
                        <div className="card-body text-danger text-center h1 border-danger border-top border-bottom my-4 py-2">
                            SEALED
                        </div>
                      </div>
                </div>
            </div>
            <br></br>
            <div className={`row w-100 h-40`}>
                <div className="col h-100 p-0">
                    <div className="grid position-relative h-100">
                      <div className="row h-100 w-100" style={{marginLeft:1}}>
                        <div className="col-4 border d-flex align-items-center justify-content-center">
                        <button className="btn btn-dark px-3 py-1 r-25 text-white" onClick={pollClosing}>Close</button>
                        </div>
                        
                          <div className="col-4 border d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-warning px-3 py-1 mb-2 r-25 text-white" onClick={Result1}>Result I</button>
                            <button className="btn btn-warning px-3 py-1 mt-2 r-25 text-white" onClick={console.log("res2")}>Result II</button>
                          </div>
                          <div className="col-4 border d-flex align-items-center justify-content-center">
                          <button className="btn btn-light px-3 py-1 my-auto r-25 text-dark border border-dark" onClick={CLear}>Clear</button>
                          </div>
                          <div className={`position-absolute bg-success h-100 ${compartment2OpenIn?"swing-right-fwd z-1":""}`} style={{top:0,right:0,width:"67%"}}></div>
                      </div>
                    </div>
                    <div className={`card text-white bg-primary position-absolute mb-3 d-inline-block w-100 h-100 ${compartment2Open?"swing-right-fwd":""}`} style={{top:0,left:0}}>
                        <div className="card-body h-100">
                            
                            <span className={`badge badge-danger bg-dark px-3 py-2 r-25 lid ${lidOpen?"swing-left-fwd":""}`} onClick={()=>(setLidOpen(!lidOpen))} >.</span>
                            <button className="btn btn-dark closeBtn px-3 py-1 ml-4 mt-4 r-25 text-white" onClick={pollClosing}>Close</button>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>






        <div className="align-items-start d-flex justify-content-between d-flex w-100 bottom-0 card-footer">
            <button className="card-link btn btn-primary py-1 px-3 r-25" onClick={TotalClick} >Total</button>
            <button className="card-link btn btn-primary p-5" onClick={ballotOn}>Ballot</button>
        </div>
      </div>
    </div>
    )
}

export default ControlUnit

