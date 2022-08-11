import React, {useState} from "react";
import {actions} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: "Accordion stories",
    components: Accordion,
};

const callBack = actions("on")


export const AccordionChanging = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    return <Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}/>
}