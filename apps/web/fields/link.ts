import { Field } from 'payload';

export const link: Field = {
  name: 'link',
  type: 'group',
  label: 'Link',
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
      validate: (value) => {
        if (!value) return 'URL is required';
        // Basic URL validation
        try {
          new URL(value);
          return true;
        } catch {
          // Check if it's a relative path
          if (value.startsWith('/')) return true;
          return 'Please enter a valid URL or relative path';
        }
      },
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      label: 'Open in New Tab',
      defaultValue: false,
    },
  ],
};
