import { render, screen } from '@testing-library/react';
import { COUNTRIES, formatNumbers, getFormattedString } from '../../utils';
import { CountryView } from './CountryView';

describe('CountryView', () => {
  it('should render details for a single country', () => {
    const country = COUNTRIES[0];
    render(<CountryView countries={COUNTRIES} countryCode={country.alpha3Code} />);

    const flagElement = screen.getByRole('img');
    const titleElement = screen.getByRole('heading', { level: 3 });
    const capitalElement = screen.getByText(`Capital: ${country.capital}`);
    const populationElement = screen.getByText(`Population: ${formatNumbers(country.population)}`);
    const currencyElement = screen.getByText(`Currency: ${getFormattedString(country.currencies)}`);
    const languageElement = screen.getByText(`Languages: ${getFormattedString(country.languages)}`);

    expect(flagElement).toBeDefined();
    expect(titleElement).toHaveTextContent(country.name);
    expect(capitalElement).toBeDefined();
    expect(populationElement).toBeDefined();
    expect(currencyElement).toBeDefined();
    expect(languageElement).toBeDefined();
  });
});
