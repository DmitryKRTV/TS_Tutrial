import React, {useState} from "react";
import Star from "../Star";
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType = {
    defaultValue?: RatingValueType
}

const UncontrolledRating = (props: RatingPropsType) => {

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 4);

    return (
        <div>
            <Star selected={ value > 0 } setValue={()=>{setValue(1)}}/>
            <Star selected={ value > 1 } setValue={()=>{setValue(2)}}/>
            <Star selected={ value > 2 } setValue={()=>{setValue(3)}}/>
            <Star selected={ value > 3 } setValue={()=>{setValue(4)}}/>
            <Star selected={ value > 4 } setValue={()=>{setValue(5)}}/>
        </div>
    );
};

export default UncontrolledRating;
