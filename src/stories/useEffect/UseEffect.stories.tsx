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

export const SetTimeoutEmaple = () => {
    console.log("UseEffectDemo Component")
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHors] = useState(0);

    // useEffect(()=> {
    //     console.log("useEffect every render")
    //     // setTimeout(() => {
    //     //     document.title = counter.toString()
    //     // }, 1000)
    //     //api.getUsers().then("")
    //     //setInterval
    //     //indexedDB
    //     //document.getElementID
    // },)
    useEffect(()=> {
        console.log("only firs render (componentsDidMount)")

        setInterval(() => {
            let date = new Date();
            setHors(() => date.getHours())
            setMinutes(() => date.getMinutes())
            setSeconds(() => date.getSeconds())
        }, 1000)
        //indexedDB
        //document.getElementID
    },[])
    // useEffect(()=> {
    //     console.log("Will be launched 1 render and when counter will be changed")
    //     // setInterval(() => {
    //     //     setCounter(counter + 1)
    //     // }, 1000)
    //     // setTimeout(() => {
    //     //     document.title = counter.toString()
    //     // }, 1000)
    //     //api.getUsers().then("")
    //     //setInterval
    //     //indexedDB
    //     //document.getElementID
    // },[counter])

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}></button>*/}
        <div>{hours} : {minutes} : {seconds}</div>
    </>
}

