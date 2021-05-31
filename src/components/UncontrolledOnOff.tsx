import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    const btnStyle = {
        marginTop: '30px'
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div style={btnStyle}>
            <button style={onStyle} onClick={onClicked}>ON
            </button>
            <button style={offStyle} onClick={offClicked}>OFF
            </button>
            <div style={indicatorStyle}/>
        </div>
    )
}