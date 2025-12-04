import { Field } from 'payload';

export const rotatingLinks: Field = {
  name: 'rotatingLinks',
  type: 'group',
  label: 'Rotating Links Section',
  fields: [
    {
      name: 'leftDecoration',
      type: 'upload',
      relationTo: 'media',
      label: 'Left Decoration Image',
      required: false,
    },
    {
      name: 'rightDecoration',
      type: 'upload',
      relationTo: 'media',
      label: 'Right Decoration Image',
      required: false,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Link Icon (Default: send icon)',
      required: false,
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Link Text',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          label: 'Open in New Tab',
          defaultValue: true,
        },
      ],
    },
  ],
};
