import { Field } from 'payload';

export const contact: Field = {
  name: 'contact',
  type: 'group',
  label: 'Contact Section',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Reach Out to Us',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'This text is an example of text that can be replaced in the same space, this text has been generated from the Arabic text generator, where you can generate such text',
      label: 'Section Description',
    },
  ],
};
