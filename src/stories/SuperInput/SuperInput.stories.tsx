import React, {ChangeEvent, useRef, useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {SuperInput} from "./SuperInput";
import {action} from "@storybook/addon-actions";

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

export const ControlledInput = () => {

  const [parentValue, setParentValue] = useState("");

  const onChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}

  return <>
    <input value={parentValue} onChange={onChangeFunc}/>
  </>
}

export const ControlledCheckbox = () => {

  const [parentValue, setParentValue] = useState(true);

  const onChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)}

  return <>
    <input type={"checkbox"} checked={parentValue} onChange={onChangeFunc}/>
  </>
}

export const ControlledSelect = () => {

  const [parentValue, setParentValue] = useState<string | undefined>("");

  const onChangeFunc = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return <>
    <select value={parentValue} onChange={onChangeFunc}>
      <option value="0">none</option>
      <option value="1">Minsk</option>
      <option value="2">Moscow</option>
      <option value="3">Kiev</option>
    </select>
  </>
}


// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };


