import { Field } from 'payload';

export const titleContainer: Field = {
  name: 'titleContainer',
  type: 'group',
  label: 'Title Container',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      defaultValue: 'K.Corp A Trusted',
    },
  ],
};
