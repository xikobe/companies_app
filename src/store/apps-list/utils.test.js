import { parseCategories, parseAppsData } from './utils';

const mockApps = [
  {
    id: '9b565b11-7311-5b5e-a699-97873dffb361',
    name: 'Voice Report',
    description: 'Calls reporting and analytics of your calls.',
    categories: ['Dialer', 'Reporting', 'Optimization'],
    subscriptions: [
      {
        name: 'Trial',
        price: 0,
      },
      {
        name: 'Professional',
        price: 3500,
      },
    ],
  },
  {
    id: '470fedc5-489e-5acb-a200-c85adaa18356',
    name: 'Power Dialer',
    description:
      'Auto dialer that will help increase your connect rates and talk time.',
    categories: ['Dialer'],
    subscriptions: [
      {
        name: 'Trial',
        price: 0,
      },
      {
        name: 'Professional',
        price: 4500,
      },
      {
        name: 'Premium',
        price: 6000,
      },
    ],
  },
];

describe('parseAppsData', () => {
  it('returns the correct apps object', () => {
    const parsedApps = parseAppsData(mockApps);

    expect(parsedApps.ids).toEqual(mockApps.map((app) => app.id));
    expect(parsedApps.apps).toMatchSnapshot(); // this is usefull to check big objects
  });
});

describe('parseCategories', () => {
  it('returns the correct categories object', () => {
    const parsedCategories = parseCategories(mockApps);

    expect(parsedCategories.list).toEqual(['Dialer', 'Optimization', 'Reporting']);
    expect(parsedCategories.appsByCategory).toMatchSnapshot();
  });
});
