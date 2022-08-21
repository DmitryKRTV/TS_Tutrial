import React from "react";


type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}

type ItemsType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {

    const {items, value} = props

    return (
        <div>
            <div>{items.filter(i => i.value === value).map(i => <div>{i.title}</div>)}</div>
            {items.map(i => <div>{i.title}</div>)}
        </div>
    )
}