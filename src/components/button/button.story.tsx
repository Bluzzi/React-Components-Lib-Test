import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Button",
  component: Button
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args}>Click me</Button>;

export const Primary = Template.bind({});
Primary.args = {};