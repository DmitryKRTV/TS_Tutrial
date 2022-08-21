import React, {ChangeEvent, useRef, useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {SuperInput} from "./SuperInput";

export default {
  title: 'SuperInput',
  component: SuperInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SuperInput>;

const Template: ComponentStory<typeof SuperInput> = (args) => <SuperInput {...args} />;

export const ControlledInputExample = Template.bind({});

ControlledInputExample.args = {
  value :"Here are the message"
};


export const UncontrolledInput: ComponentStory<typeof SuperInput> = (args) => {
  const [value, setValue] = useState<string>("");
  return <SuperInput title={"Menu"} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}/>
}

UncontrolledInput.args = {

};

export const GetValueOfUncontrolledInputByButtonPress: ComponentStory<typeof SuperInput> = (args) => {

  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const element = inputRef.current as HTMLInputElement;
    setValue(element.value);
  }

  return <>
    <input ref={inputRef}/>
    <button onClick={save}>save</button>  - actual value: {value}
  </>
}

GetValueOfUncontrolledInputByButtonPress.args = {

};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };


