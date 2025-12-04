import { Field } from 'payload';

export const about: Field = {
  name: 'about',
  type: 'group',
  label: 'About Us Section',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'ABOUT US',
    },
    {
      name: 'mainDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'K.CORP IS MORE THAN AN INVESTMENT HOLDING...',
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'CONTACT',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link',
      defaultValue: '#contact',
    },
    
    {
      name: 'secondaryTitle',
      type: 'text',
      required: true,
      defaultValue: 'SHAPING THE FUTURE WITH PURPOSE',
    },
    {
      name: 'secondaryDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'This text is an example of text...',
    },

    {
      name: 'sections',
      type: 'array',
      label: 'About Sections',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
     
      ],
    },
  ],
};