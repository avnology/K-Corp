import { Field } from 'payload';

export const hero: Field = {
  name: 'hero',
  type: 'group',
  label: 'Hero Section',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
      defaultValue: 'K.CORP BEYOND INVESTMENT',
    },
    {
      name: 'subtitle',
      type: 'textarea', 
      label: 'Subtitle / Description',
      required: true,
      defaultValue: 'This text is an example of text that can be replaced...',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Label',
      required: true,
      defaultValue: 'Contact Us',
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media', 
      label: 'Background Video',
      required: true,
      filterOptions: {
        mimeType: { contains: 'video' },
      },
    },
  ],
};