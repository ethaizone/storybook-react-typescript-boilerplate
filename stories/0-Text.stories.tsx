import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { TextBody } from '../src/core'

export default {
  title: 'Text',
  component: TextBody,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta

export const text = (args) => {
  return <TextBody {...args} />
}
