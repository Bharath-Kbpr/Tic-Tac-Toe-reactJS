import React from 'react'

const Square = (props) => {
    const classes = props.className ? `${props.className} square`:'square'
    return (
        <div>
        <div className={classes} onClick={props.onClick}> {props.state}</div>
        </div>
    )
}

export default Square
