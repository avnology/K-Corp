import { GlobalConfig } from 'payload';
import { hero } from '../fields/hero';
import { titleContainer } from '../fields/titleContainer';
import { about } from '../fields/about';
import { rotatingLinks } from '../fields/rotatingLinks';
import { companies } from '../fields/companies';
import { partners } from '../fields/partners';
import { contact } from '../fields/contact';

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
    rotatingLinks,
    companies,
    partners,
    contact,
  ],
};