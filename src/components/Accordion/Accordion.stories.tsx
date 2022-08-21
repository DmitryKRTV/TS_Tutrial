import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion, {itemsExample} from "./Accordion";


export default {
    title: "Accordion stories",
    components: Accordion,
};

const callBack = action("item was clicked")


export const AccordionChanging = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    return <Accordion title={"Menu"} collapsed={accordionCollapsed} onChange={setAccordionCollapsed} items={itemsExample} onClick={() => callBack()}/>
}