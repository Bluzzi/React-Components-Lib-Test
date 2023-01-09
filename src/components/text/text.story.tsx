import { StoryFn, Meta } from "@storybook/react";
import { Text } from "./text";

export default {
  title: "Text",
  component: Text
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = args => (
  <Text {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
);

export const Default = Template.bind({});
Default.args = {};

export const Title = Template.bind({});
Title.args = {
  type: "h1"
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary"
};