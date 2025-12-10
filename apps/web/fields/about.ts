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
      defaultValue: 'K.CORP IS MORE THAN AN INVESTMENT HOLDING WE BUILD A BUSINESS ECOSYSTEM THAT CREATES VALUE Once established with a vision for long-term sustainability, K Corp Investment and Holding,headquartered in Saudi Arabia, has grown into a diversified group empowering subsidiaries across logistics, energy, facility management, F&B, and urban planning. Through a decentralized model and strategic support, we contribute to Saudi Arabia’s Vision 2030 by enabling businesses that deliver measurable impact.',
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