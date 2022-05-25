import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Header, { HeaderProps } from '@components/Header';

export default {
  title: 'Header/Header',
  component: Header,
  args: {
    headerType: 'main',
  },
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args: HeaderProps) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);
