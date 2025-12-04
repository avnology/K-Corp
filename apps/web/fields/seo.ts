import { Field } from 'payload'

export const seo: Field = {
  name: 'seo',
  label: 'SEO Settings',
  type: 'group',
  admin: {
    description: 'Custom metadata for SEO and social sharing.',
  },
  fields: [
    {
      name: 'metaTitle',
      label: 'Meta Title',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'metaDescription',
      label: 'Meta Description',
      type: 'textarea',
      required: false,
      localized: true,
    },
    {
      name: 'ogTitle',
      label: 'OG Title',
      type: 'text',
      localized: true,
    },
    {
      name: 'ogDescription',
      label: 'OG Description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'ogURL',
      label: 'OG URL',
      type: 'text',
    },
    {
      name: 'ogImage',
      label: 'OG Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'ogType',
      type: 'text',
      defaultValue: 'website',
    },
    {
      name: 'canonicalURL',
      label: 'Canonical URL',
      type: 'text',
      required: false,
    },
    {
      name: 'keywords',
      label: 'Meta Keywords',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'robots',
      label: 'Robots',
      type: 'select',
      options: [
        { label: 'Index, Follow', value: 'index,follow' },
        { label: 'No Index, Follow', value: 'noindex,follow' },
        { label: 'Index, No Follow', value: 'index,nofollow' },
        { label: 'No Index, No Follow', value: 'noindex,nofollow' },
      ],
      defaultValue: 'index,follow',
    },
  ],
}
