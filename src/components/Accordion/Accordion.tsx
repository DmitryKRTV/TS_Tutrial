import React from "react";

type AccordionProps = {
    title: string
    collapsed: boolean
    onChange: (value:boolean)=>void
}

function Accordion(props: AccordionProps) {

    return <div>
        <AccordionTitle title={props.title} onClick={()=>{props.onChange(!props.collapsed)}}/>
        {!props.collapsed && <AccordionBody/>}
    </div>

}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    const {title, onClick} = props
    return <div>
        <h3 onClick={onClick}>--{title}--</h3>
    </div>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export function PageTitle(props: AccordionProps) {
    return (
        <div>{props.title}</div>
    )
}

export default Accordion;