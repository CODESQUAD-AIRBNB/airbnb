import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar, { SEARCH_BAR_SIZE, SearchBarTypes } from '@components/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  args: {
    isActiveSearchBar: true,
    size: SEARCH_BAR_SIZE.LARGE,
  },
  argTypes: {
    isActiveSearchBar: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'radio',
      },
      options: [SEARCH_BAR_SIZE.SMALL, SEARCH_BAR_SIZE.LARGE],
    },
  },
} as ComponentMeta<typeof SearchBar>;

export const Default: ComponentStory<typeof SearchBar> = (args: SearchBarTypes) => (
  <SearchBar {...args} />
);
