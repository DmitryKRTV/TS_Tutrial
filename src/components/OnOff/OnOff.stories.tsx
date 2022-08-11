import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {actions} from "@storybook/addon-actions";


export default {
    title: "OnOff stories",
    components: OnOff,
};

const callBack = actions("onas");

export const OnOffTrue = () => {
    return <OnOff on={true} onChange={()=>callBack}/>
}

export const OnOffChanging = () => {
    const [onOffValue, setOnOffValue] = useState<boolean>(false);
    return <OnOff on={onOffValue} onChange={setOnOffValue}/>
}