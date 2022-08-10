import React, {useState} from "react";
import Star from "./Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType ) => void
}

export function Rating(props: RatingPropsType) {

    const {value, onClick} = props

    return (
        <div>
            <Star selected={ value > 0 } setValue={()=>{onClick(1)}} />
            <Star selected={ value > 1 } setValue={()=>{onClick(2)}} />
            <Star selected={ value > 2 } setValue={()=>{onClick(3)}} />
            <Star selected={ value > 3 } setValue={()=>{onClick(4)}} />
            <Star selected={ value > 4 } setValue={()=>{onClick(5)}} />
        </div>
    )
}