import React, {useState,createContext} from 'react'

export const votersContext = createContext()

const VotersContextProvider = (props) => {
  
    const [compartment2Open, setCompartment2Open] = useState(false);
    const [CU_On,setCU_On] = useState(false);
  
    return (
      <votersContext.Provider 
          value={{
            _compartment2Open:[ compartment2Open, setCompartment2Open],
            _CU_On:[ CU_On, setCU_On]
        
          }}>
        {props.children}
      </votersContext.Provider>
    )
  }

export default VotersContextProvider