import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    //collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(false);
    const [state, dispatch] = useReducer(reducer, {collapsed:false});

    return <div>
        <AccordionTitle title={props.titleValue}
                        onClick={() => dispatch({type: TOGGLE_CONSTANT})}

        />
        {!state.collapsed && <AccordionBody/>}
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

export default UncontrolledAccordion;