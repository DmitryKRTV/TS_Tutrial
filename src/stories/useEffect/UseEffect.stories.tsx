import React, {useEffect, useState} from "react";

export default {
    title: 'Use effect',
    // component: SuperInput,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export const UseEffectDemo = () => {
    console.log("UseEffectDemo Component")
    const [counter, setCounter] = useState(1);

    useEffect(()=> {
        console.log("useEffect every render")
        document.title = counter.toString()
        //api.getUsers().then("")
        //setInterval
        //indexedDB
        //document.getElementID
    },)
    useEffect(()=> {
        console.log("only firs render (componentsDidMount)")
        document.title = counter.toString()
        //api.getUsers().then("")
        //setInterval
        //indexedDB
        //document.getElementID
    },[])
    useEffect(()=> {
        console.log("Will be launched 1 render and when counter will be changed")
        document.title = counter.toString()
        //api.getUsers().then("")
        //setInterval
        //indexedDB
        //document.getElementID
    },[counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        {counter}
    </>
}

