import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const CountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users Secret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('Helps To React Memo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Jeka', 'Katy'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}
