import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css"

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

type ItemsType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {

    const {items, value, onChange} = props

    const initialState = value || "1"

    const [active, setActive] = useState(true);
    const [hoveredElementValue, setHoveredElementValue] = useState(initialState);

    useEffect(() => {
        setHoveredElementValue(initialState)
    }, [initialState])


    const selectedItem = items.filter(i => i.value === value)
    const hoveredItem = items.filter(i => i.value === hoveredElementValue)

    const toggleItems = () => {
        setActive(!active)
    }

    const itemClicked = (value: any) => {
        return () => {
            toggleItems();
            onChange(value)
        }
    }

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < items.length; i++) {
                if(items[i].value === hoveredElementValue) {
                    const currentElement = e.key === "ArrowDown"
                        ? items[i+1]
                        : items[i-1]
                    if(currentElement) {
                        onChange(currentElement.value)
                        return;
                    }
                }
            }
            onChange(items[0].value)
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(!active)
        }
    }

    return (
        <div>
            <div className={styles.select} tabIndex={0} onKeyUp={onKeyUp}>
                {selectedItem && selectedItem.map(i => <span className={styles.main} onClick={toggleItems} key={i.value}>{i.title}</span>)}
                {(active || !selectedItem) && <div className={styles.items}>
                    {items.map(i => <div
                        key={i.value}
                        onMouseEnter={()=>{setHoveredElementValue(i.value)}}
                        className={styles.item + " " + (hoveredItem[0].value === i.value ? styles.selected : "")}
                        onClick={itemClicked(i.value)}
                    >{i.title}</div>)}
                </div>}
            </div>
        </div>
    )
}