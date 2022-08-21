import React, {useState} from "react";
import {actions} from "@storybook/addon-actions";
import UncontrolledOnOff from "./UncontrolledOnOff";


export default {
    title: "UncontrolledOnOff stories",
    components: UncontrolledOnOff,
};

const callBack = actions("on")


export const UncontrolledOnOffChanged = () => {
    const [onOffValue, setOnOffValue] = useState<boolean>(false);
    return <UncontrolledOnOff onChange={setOnOffValue} />
}

export const OnMode = () => {
    const [onOffValue, setOnOffValue] = useState<boolean>(false);
    return <UncontrolledOnOff defaultOn={true} onChange={setOnOffValue} />
}

export const OffMode = () => {
    const [onOffValue, setOnOffValue] = useState<boolean>(false);
    return <UncontrolledOnOff defaultOn={false} onChange={setOnOffValue} />
}
