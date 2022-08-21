import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from "./Accordion";
import {actions} from "@storybook/addon-actions";

export default {
  title: "AccordionNew stories",
  components: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Accordion>;

const callBack = actions("on")

const Template: ComponentStory<typeof Accordion> = (args) => {
  return <Accordion {...args} />
};

export const AccordionChangingNew = Template.bind({});

AccordionChangingNew.args = {
  title: "Menu",
  collapsed: true,
  onClick: ()=> callBack
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
// Header.stories.tsx

export const AccordionChangingWithOld: ComponentStory<typeof Accordion> = (args) => {
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  return <Accordion title={"Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
}

AccordionChangingWithOld.args = {
  title: "Menu",
};
