import {SuperInput} from "../SuperInput/SuperInput";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {ChangeEvent, useMemo, useState} from "react";



const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export default {
    title: 'Use memo',
    // component: SuperInput,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let temporaryResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            temporaryResultA *= i;
        }
        return  temporaryResultA
    },[a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e)=> setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e)=> setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result fro a:{resultA}</div>
        <div>Result fro b:{resultB}</div>
    </>
}

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["dd", "dssa", "Petya"]);

    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    },[users])

    const addUser = () => {
        const newUsers = [...users, "Svena" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        <button onClick={addUser}></button>
        {counter}
        <Users users={newArray}/>
    </>
}