import React, { useState } from 'react'
import EmptySlot from './EmptySlot'
import Mole from './Mole'

function MoleContainer(props) {
    // Mole state variable
    let [moleStatus, setStatus] = useState(false)
    const MoleBopped = () => {
        props.setScore(props.score + 1)
        setStatus(false)
    }
    
    let displayMole = moleStatus ? <Mole toggle={setStatus} handleClick={MoleBopped}/> : <EmptySlot toggle={setStatus}/> 

    return(
        <div style={{'display':'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
} 

export default MoleContainer
