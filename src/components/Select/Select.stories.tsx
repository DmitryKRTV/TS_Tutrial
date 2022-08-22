import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
  title: "Select stories",
  components: Select,
  parameters: {
    layout: 'fullscreen',
  },
  // argTypes: {
  //   onChange: {
  //     table: {
  //       category: "Events"
  //     }
  //   },
  // },
} as ComponentMeta<typeof Select>;

const itemsExample = [{title:"Dimych", value: "1"}, {title:"Volga", value: "2"}, {title:"Sedan", value: "3"}, {title:"Valera", value: "4"}]

const callBack = action("item was clicked")

const Template: ComponentStory<typeof Select> = (args) => <Select {...args}/>;

export const SelectWithValue = Template.bind({});

SelectWithValue.args = {
  value: "2",
  onChange: callBack,
  items: itemsExample,
};

export const SelectWithoutValue = Template.bind({});

SelectWithoutValue.args = {
  onChange: callBack,
  items: itemsExample,
};


export const ControlledSelect: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<string>("");
  return <Select {...args}  // эта строка ВСЕГДА должна быть впереди
                    value={value}
                    onChange={setValue}
  />
}

ControlledSelect.args = {
  items: itemsExample,
};
