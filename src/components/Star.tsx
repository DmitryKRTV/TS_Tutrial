import React from "react";

type StarProps = {
    selected: boolean
    // value: 1 | 2 | 3 | 4 | 5
    setValue: () => void
}

export function Star(props: StarProps) {
    return (
        <span onClick={props.setValue}
        >{props.selected ? <b>Star </b> : "Star " }</span>
    )
}

export default Star