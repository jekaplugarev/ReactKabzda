import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect'
}

export const Example = () => {
    console.log('Example')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>
        <div>{counter}</div>
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
        <div>{fake}</div>
    </>
}

export const SetTimeOutExample = () => {
    console.log('Set Time Out Example')

    const [counter, setCounter] = useState(1)

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter}
    </>
}
