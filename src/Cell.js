import React from 'react'

export default function Cell(props) {
    return (
        <div className='cell' style={props.cellStyle}>
            {props.value}
        </div>
    )
}
