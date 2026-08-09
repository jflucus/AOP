// Central site configuration — edit these values as the org firms things up.

export const site = {
  publicName: 'AOP Foundation',
  legalName: 'Athletes of Promise Foundation',
  tagline:
    'Preparing NYC Student-Athletes for College, Careers, Leadership, and Life Through Athletics and Education.',
  motto: 'Promise. Preparation. Purpose.',
  // Stripe Payment Link where the donor picks their own amount.
  donateCustomUrl: 'https://buy.stripe.com/14A6oI0ja1nwf2A3WA8so06',
  // Stripe Payment Links (one per preset amount) — donations flow to the org's Mercury account.
  donateOptions: [
    { amount: 50, url: 'https://buy.stripe.com/cNicN60jad6e9IgakY8so01' },
    { amount: 100, url: 'https://buy.stripe.com/9B65kEfe49U2aMk0Ko8so02' },
    { amount: 250, url: 'https://buy.stripe.com/cNi6oIea04zI8Ec2Sw8so03' },
    { amount: 500, url: 'https://buy.stripe.com/bJe8wQgi8femcUs9gU8so04' },
    { amount: 1000, url: 'https://buy.stripe.com/00waEY8PG9U26w4gJm8so05' },
  ],
  // Stripe Payment Link for the AOP Foundation Signature Tee. Leave blank to show
  // the "ordering is being set up" fallback on /shop/ instead of a Buy Now button.
  shopTeeUrl: 'https://buy.stripe.com/4gMfZi2ri8PYcUsdxa8so07',
  // TODO: replace with the org's real contact details.
  email: 'info@aopfoundation.org',
  location: 'New York, NY',
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
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'Mission, Vision, Core Beliefs', href: '/about/' },
      { label: 'Our Team', href: '/team/' },
    ],
  },
  { label: 'Programs', href: '/programs/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Get Involved', href: '/get-involved/' },
  { label: 'Partners', href: '/partners/' },
  { label: 'News & Events', href: '/news/' },
  { label: 'Contact', href: '/contact/' },
];
