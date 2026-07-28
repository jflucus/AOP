// Central site configuration — edit these values as the org firms things up.

export const site = {
  publicName: 'AOP Foundation',
  legalName: 'Athletes of Promise Foundation',
  tagline:
    'Preparing Students for College, Careers, Leadership, and Life Through Athletics and Education.',
  motto: 'Promise. Preparation. Purpose.',
  // Stripe Payment Link — donations flow to the org's Mercury account.
  donateUrl: 'https://buy.stripe.com/14AaEY5Dud6eaMkfFi8so00',
  // TODO: replace with the org's real contact details.
  email: 'info@aopfoundation.org',
  location: 'New York City, NY',
  serviceArea: 'Under-resourced NYC neighborhoods',
  // Optional social links — leave blank to hide.
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Programs', href: '/programs/' },
  { label: 'Our Team', href: '/team/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Get Involved', href: '/get-involved/' },
  { label: 'Partners', href: '/partners/' },
  { label: 'News & Events', href: '/news/' },
  { label: 'Contact', href: '/contact/' },
];
