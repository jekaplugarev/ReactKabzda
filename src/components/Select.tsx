import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}
export type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    const toogleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toogleItems()
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <div
                    className={styles.main}
                    onClick={toogleItems}>
                    {selectedItem && selectedItem.title}
                </div>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        key={i.value}
                        onMouseEnter={() => {
                            setHoveredElementValue(i.value)
                        }}
                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                        onClick={() => onItemClick(i.value)}
                    >{i.title}</div>)}
                </div>
            }
        </div>
    )
}