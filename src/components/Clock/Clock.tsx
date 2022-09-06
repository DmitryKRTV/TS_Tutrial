import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockPropsType = {
    mode?: "digital" | "analog"
}

export const get2ValuesString = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`
}

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

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};

export type ClockViewType = {
    date: Date
}

