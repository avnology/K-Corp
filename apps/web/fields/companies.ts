import { Field } from 'payload';

export const companies: Field = {
  name: 'companies',
  type: 'group',
  label: 'Companies Section',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'COMPANIES',
      label: 'Title (displayed vertically)',
    },
    {
      name: 'titleLink',
      type: 'text',
      label: 'Title Link URL',
      defaultValue: '/companies',
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Video',
      required: false,
    },
    {
      name: 'contentSlides',
      type: 'array',
      label: 'Content Slides',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Slide Image',
          required: false,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
      ],
    },
  ],
};
