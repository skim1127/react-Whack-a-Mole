import React, { useEffect } from 'react'
// import image
import moleImg from '../images/mole.png'

function Mole(props) {
    useEffect(() => {
        let randomNum = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomNum)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img
            style={{
                'display':'inline-block', 
                'width': '30vw'
            }}
            src={moleImg}
            onClick={props.handleClick}
            />
        </div>
    )
}

export default Mole