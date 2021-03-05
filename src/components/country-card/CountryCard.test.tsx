import { render, screen } from '@testing-library/react';
import { Country, formatNumbers } from '../../utils';
import { CountryCard } from './CountryCard';

describe('CountryCard', () => {
  const countries: Country[] = [
    {
      name: 'Colombia',
      topLevelDomain: ['.co'],
      alpha2Code: 'CO',
      alpha3Code: 'COL',
      callingCodes: ['57'],
      capital: 'Bogotá',
      altSpellings: ['CO', 'Republic of Colombia', 'República de Colombia'],
      region: 'Americas',
      subregion: 'South America',
      population: 48759958,
      latlng: [4.0, -72.0],
      demonym: 'Colombian',
      area: 1141748.0,
      gini: 55.9,
      timezones: ['UTC-05:00'],
      borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
      nativeName: 'Colombia',
      numericCode: '170',
      currencies: [
        {
          code: 'COP',
          name: 'Colombian peso',
          symbol: '$',
        },
      ],
      languages: [
        {
          iso639_1: 'es',
          iso639_2: 'spa',
          name: 'Spanish',
          nativeName: 'Español',
        },
      ],
      translations: {
        de: 'Kolumbien',
        es: 'Colombia',
        fr: 'Colombie',
        ja: 'コロンビア',
        it: 'Colombia',
        br: 'Colômbia',
        pt: 'Colômbia',
      },
      flag: 'https://restcountries.eu/data/col.svg',
      regionalBlocs: [
        {
          acronym: 'PA',
          name: 'Pacific Alliance',
          otherAcronyms: [],
          otherNames: ['Alianza del Pacífico'],
        },
        {
          acronym: 'USAN',
          name: 'Union of South American Nations',
          otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
          otherNames: [
            'Unión de Naciones Suramericanas',
            'União de Nações Sul-Americanas',
            'Unie van Zuid-Amerikaanse Naties',
            'South American Union',
          ],
        },
      ],
      cioc: 'COL',
    },
  ];

  it('should render a single country card', () => {
    const country = countries[0];
    render(<CountryCard country={country} />);

    const flagElement = screen.getByRole('img');
    const titleElement = screen.getByRole('heading');
    const capitalElement = screen.getByText(`Capital: ${country.capital}`);
    const populationElement = screen.getByText(`Population: ${formatNumbers(country.population)}`);
    const regionElement = screen.getByText(`Region: ${country.region}`);
    const areaElement = screen.getByText(`Area: ${country.area ? formatNumbers(country.area) : '-'}`);

    expect(flagElement).toBeDefined();
    expect(titleElement).toHaveTextContent(country.name);
    expect(capitalElement).toBeDefined();
    expect(populationElement).toBeDefined();
    expect(regionElement).toBeDefined();
    expect(areaElement).toBeDefined();
  });
});
