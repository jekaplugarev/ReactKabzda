import React, {useMemo, useState} from 'react';

export default {
    title: 'useState'
}

function generateData() {
    // difficult counting
    console.log('Generate Data')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    // const initValue = useMemo(generateData, [])

    // const [counter, setCounter] = useState(initValue)
    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}
