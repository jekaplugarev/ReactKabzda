import React, {useReducer} from 'react';
import {reducer, toggleCollapsed} from './reducer';

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [state, dispath] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispath({type: toggleCollapsed})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
const cursor = {
    cursor: 'pointer'
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 style={cursor} onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}