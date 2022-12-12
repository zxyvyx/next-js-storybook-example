import { Meta } from '@storybook/addon-docs';
import Button from '../components/Button';

<Meta title='ADS Design System/Button' />;

export default {
  title: 'ADS/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnStyle: 'primary',
  isSelected: false,
  isDisabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  btnStyle: 'warning',
  isSelected: false,
  isDisabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  btnStyle: 'danger',
  isSelected: false,
  isDisabled: false,
};
