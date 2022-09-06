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

        const intId = setInterval(() => {
            let date = new Date();
            setHors(() => date.getHours())
            setMinutes(() => date.getMinutes())
            setSeconds(() => date.getSeconds())
        }, 1000)
        return () => {
            clearInterval(intId)
        }
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

export const ResetUseEffect = () => {
    console.log("UseEffectDemo Component")
    const [counter, setCounter] = useState(1);

    useEffect(()=> {
        console.log("useEffect render" + counter)

        return () => {
            console.log("RESET effect")
        }
    },[counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const KeysTrackerExample = () => {
    console.log("UseEffectDemo Component")
    const [text, setText] = useState("");

    useEffect(()=> {
        const handler = (e: KeyboardEvent)=>{
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            console.log("RESET effect")
            window.removeEventListener("keypress", handler)
        }
    },[text])

    return <>
        {text}
    </>
}

export const SetTimeoutExample = () => {
    console.log("UseEffectDemo Component")
    const [text, setText] = useState("");

    useEffect(()=> {

        const tId = setTimeout(()=> {
            setText("3s past")
        }, 3000)
        return () => {
            console.log("RESET effect")
            clearTimeout(tId)
        }
    },[text])

    return <>
        {text}
    </>
}
