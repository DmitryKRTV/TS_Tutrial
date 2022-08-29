import React, {useEffect, useState} from "react";

type ClockPropsType = {}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("T")
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const get2ValuesString = (number: number) => {
        return number < 10 ? `0${number}` : `${number}`
    }

    return (
        <div>
            <span>{get2ValuesString(date.getHours())}</span>
            :
            <span>{get2ValuesString(date.getMinutes())}</span>
            :
            <span>{get2ValuesString(date.getSeconds())}</span>
        </div>
    );
};

