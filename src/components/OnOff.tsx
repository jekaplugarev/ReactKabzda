import React, {useState} from 'react';

export type PropsType = {
    on: boolean
    /**
     * Change mode
     * @param on
     */
    onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {
    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    const btnStyle = {
        marginTop: '30px'
    }
    const onClicked = () => {
        props.onChange(true)
    }
    const offClicked = () => {
        props.onChange(false)
    }

    return (
        <div style={btnStyle}>
            <button style={onStyle} onClick={onClicked}>ON</button>
            <button style={offStyle} onClick={offClicked}>OFF
            </button>
            <div style={indicatorStyle}/>
        </div>
    )
}