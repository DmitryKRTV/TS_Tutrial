import React from "react";

type AccordionProps = {
    title: string
    collapsed: boolean
    onChange: (value:boolean)=>void
    items: ItemsType[]
    onClick: (value: any)=>void
}

type ItemsType = {
    title: string
    value: any
}

export const itemsExample = [{title:"Dimych", value: 1}, {title:"Volga", value: 2}, {title:"Sedan", value: 3}, {title:"Valera", value: 4}]

function Accordion(props: AccordionProps) {

    const {items} = props

    return <div>
        <AccordionTitle
            title={props.title}
            onClick={()=>{props.onChange(!props.collapsed)}}
        />
        {!props.collapsed && <AccordionBody items={items} onClick={props.onClick}/>}
    </div>

}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    const {title, onClick} = props
    return <div>
        <h3 onClick={onClick} >--{title}--</h3>
    </div>
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    const {items} = props

    return <ul>
        {items.map((i, index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}

export function PageTitle(props: AccordionProps) {
    return (
        <div>{props.title}</div>
    )
}

export default Accordion;