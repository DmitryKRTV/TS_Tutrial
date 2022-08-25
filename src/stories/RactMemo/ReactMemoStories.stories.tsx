import {SuperInput} from "../SuperInput/SuperInput";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {ChangeEvent, useState} from "react";

const NewMessagesCounter = (props: {count:number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

export default {
    title: 'React memo',
    // component: SuperInput,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["dd", "dssa", "Petya"]);

    const addUser = () => {
        const newUsers = [...users, "Svena" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        <button onClick={addUser}></button>
    <NewMessagesCounter count={counter}/>
    <Users users={users}/>
    </>
}
