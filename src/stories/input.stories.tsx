import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value={'it-inkubator'}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - Actual value: {value}</>
}

export const СontrolledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChange}/>
}

export const СontrolledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const СontrolledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

    return <select value={parentValue} onChange={onChange}>
        <option value={'1'}>None</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Moscow</option>
        <option value={'4'}>Kiev</option>
    </select>
}