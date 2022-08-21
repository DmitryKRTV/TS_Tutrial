import React, {useState} from "react";
import {actions} from "@storybook/addon-actions";
import UncontrolledRating from "./UncontrolledRating";


export default {
    title: "UncontrolledRating stories",
    components: UncontrolledRating,
};

const callBack = actions("on")


export const UncontrolledRatingShowMode = () => {
    return <UncontrolledRating/>
}

export const UncontrolledRating_1Star = () => {
    return <UncontrolledRating defaultValue={1}/>
}

export const UncontrolledRating_2Star = () => {
    return <UncontrolledRating defaultValue={2}/>
}

export const UncontrolledRating_3Star = () => {
    return <UncontrolledRating defaultValue={3}/>
}

export const UncontrolledRating_4Star = () => {
    return <UncontrolledRating defaultValue={4}/>
}

export const UncontrolledRating_5Star = () => {
    return <UncontrolledRating defaultValue={5}/>
}
