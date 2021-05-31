import React from 'react';

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    /**
     * Title of accordion
     */
    titleValue: string
    /**
     * Show accordion
     */
    collapsed: boolean
    onChange: () => void
    /**
     * Optional color on header text
     */
    color?: string
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed} color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
    color?: string
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={(e) => props.onChange()} style={{color: props.color ? props.color : 'black', cursor: 'pointer'}}>{props.title}</h3>
}
export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {
                props.items.map((i, index) => <li onClick={() => {
                    props.onClick(i.value)}} key={index}>{i.title}</li>)
            }
        </ul>)
}