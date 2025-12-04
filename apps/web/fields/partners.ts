import { Field } from 'payload';

export const partners: Field = {
  name: 'partners',
  type: 'group',
  label: 'Partners Section',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Partners In Success',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'We don\'t move alone. Our growth is powered by strategic partnerships with those who share our vision and ambition. Together, we create lasting value and real market impact.',
      label: 'Section Description',
    },
    {
      name: 'partnersList',
      type: 'array',
      label: 'Partners',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Partner Name',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Partner Logo',
          required: false,
        },
      ],
    },
    {
      name: 'titleContainerAfter',
      type: 'text',
      label: 'Title Container (After Partners)',
      defaultValue: 'Contact us',
      required: true,
    },
  ],
};
