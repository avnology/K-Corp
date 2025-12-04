import { GlobalConfig } from 'payload';
import { hero } from '../fields/hero';
import { titleContainer } from '../fields/titleContainer';

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home Page',
  access: {
    read: () => true,
  },
  fields: [
    hero,
    titleContainer,
  ],
};