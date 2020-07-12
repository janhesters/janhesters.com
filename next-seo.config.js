const title = 'Jan Hesters';
const description = 'Blog by Jan Hesters. Ask better questions.';

export const SEO = {
  title,
  description,
  canonical: 'https://janhesters.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://janhesters.com',
    title,
    description,
    images: [
      {
        url: 'https://janhesters.com/logo.png',
        alt: title,
        width: 1200,
        height: 700,
      },
    ],
    site_name: 'Jan Hesters',
    profile: {
      firstName: 'Jan',
      lastName: 'Hesters',
      username: '@janhesters',
    },
  },
  twitter: {
    handle: '@janhesters',
    site: '@janhesters',
    cardType: 'summary_large_image',
  },
};
