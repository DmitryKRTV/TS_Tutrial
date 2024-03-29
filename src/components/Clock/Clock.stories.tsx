import {Clock} from "./Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";

export default {
    title: 'Clock',
    component: Clock,

} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args}/>;

export const BaseAnalogExample = Template.bind({});

BaseAnalogExample.args = {
    mode: "analog"
}

export const BaseDigitalExample = Template.bind({});

BaseDigitalExample.args = {
    mode: "digital"
}
//
// export const AccordionChangingWithOld: ComponentStory<typeof Accordion> = (args) => {
//     const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
//     return <Accordion {...args}  // эта строка ВСЕГДА должна быть впереди
//                       collapsed={accordionCollapsed}
//                       onChange={setAccordionCollapsed}
//                       onClick={callBack}
//
//
//     />
// }
//
// AccordionChangingWithOld.args = {
//     title: "Menu",
//     items: itemsExample,
// };