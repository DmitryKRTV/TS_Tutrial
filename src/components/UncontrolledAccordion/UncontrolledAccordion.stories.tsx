import React, {useState} from "react";
import {actions} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";


export default {
    title: "UncontrolledAccordion stories",
    components: UncontrolledAccordion,
};

const callBack = actions("on")


export const UncontrolledAccordionChanging = () => {
    return <UncontrolledAccordion titleValue={"Menu"} />
}