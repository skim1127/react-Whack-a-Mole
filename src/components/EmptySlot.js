import React, { useEffect } from 'react'
// import image
import emptyImg from '../images/molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        let randomNum = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomNum)
        return () => clearTimeout
    })

    return(
        <div>
            <img
            style={{
                'display': 'inline-block',
                'width': '30vw'
            }}
            src={emptyImg}
            />
        </div>
    )
}

export default EmptySlot