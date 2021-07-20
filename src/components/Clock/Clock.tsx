import React, {useEffect, useState} from 'react';

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}

type ClockViewPropsType = {
    date: Date
}

const getTime = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
                <span>
                {getTime(date.getHours())}
            </span>
        :
        <span>
                {getTime(date.getMinutes())}
            </span>
        :
        <span>
            {getTime(date.getSeconds())}
                </span>
    </>
}

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>Analog</>
}