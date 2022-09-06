import React from "react";
import {ClockViewType, get2ValuesString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
    return <>
        <span>{get2ValuesString(date.getHours())}</span>
        :
        <span>{get2ValuesString(date.getMinutes())}</span>
        :
        <span>{get2ValuesString(date.getSeconds())}</span>
    </>
}