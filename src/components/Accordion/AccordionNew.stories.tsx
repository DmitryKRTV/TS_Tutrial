import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion, {itemsExample} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
  title: "AccordionNew stories",
  components: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onChange: {
      table: {
        category: "Events"
      }
    },
  },
} as ComponentMeta<typeof Accordion>;

const callBack = action("item was clicked")

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>;

export const AccordionChangingNew = Template.bind({});

AccordionChangingNew.args = {
  title: "Menu",
  collapsed: true,
  onChange: ()=> {},
  items: itemsExample,
  onClick: callBack,
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
// Header.stories.tsx

export const AccordionChangingWithOld: ComponentStory<typeof Accordion> = (args) => {
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  return <Accordion {...args}  // эта строка ВСЕГДА должна быть впереди
                    collapsed={accordionCollapsed}
                    onChange={setAccordionCollapsed}
                    onClick={callBack}


  />
}

AccordionChangingWithOld.args = {
  title: "Menu",
  items: itemsExample,
};
