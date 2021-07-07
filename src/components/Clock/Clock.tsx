import React, {useEffect, useState} from 'react';

export const Clock: React.FC = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getTime = (num: number) => num < 10 ? '0' + num : num

    const hoursString = getTime(date.getHours())
    const minutesString = getTime(date.getMinutes())
    const secondsString = getTime(date.getSeconds())

    return (
        <div>
            <span>
                {hoursString}
            </span>
            :
            <span>
                {minutesString}
            </span>
            :
            <span>
                {secondsString}
            </span>
        </div>
    )
}