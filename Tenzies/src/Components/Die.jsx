import React from 'react'

export default function Die(props){
    // * The style variable is set up to do conditional style rendering 
    // * base on if the isHeld is true or false
    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        
        <>
            <div className="die-box" style={style}>

                <h2 className="die-num">{props.value}</h2>
            </div>
            
        </>
    )
}