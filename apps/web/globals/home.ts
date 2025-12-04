import { GlobalConfig } from 'payload';
import { hero } from '../fields/hero';
import { titleContainer } from '../fields/titleContainer';
import { about } from '../fields/about';

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home Page',
  access: {
    read: () => true,
  },
  fields: [
    hero,
    titleContainer,
    about,
  ],
};