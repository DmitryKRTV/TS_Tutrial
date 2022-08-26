import {SuperInput} from "../SuperInput/SuperInput";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {ChangeEvent, useCallback, useMemo, useState} from "react";

export default {
    title: 'Use state',
    // component: SuperInput,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(() => {
        console.log("Use state init")
        return 0
    });

    return <>
        <button onClick={() => setCounter((state:number)=> {
            console.log('Changer')
            return state + 1
        })}></button>
        {counter}
    </>
}

