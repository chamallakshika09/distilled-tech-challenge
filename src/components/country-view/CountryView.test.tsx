import { render, screen } from '@testing-library/react';
import { COUNTRIES, formatNumbers, getFormattedList } from '../../utils';
import { CountryView } from './CountryView';

describe('CountryCard', () => {
  it('should render a single country card', () => {
    const country = COUNTRIES[0];
    render(<CountryView countries={COUNTRIES} countryCode={country.alpha3Code} />);

    const flagElement = screen.getByRole('img');
    const titleElement = screen.getByRole('heading', { level: 3 });
    const capitalElement = screen.getByText(`Capital: ${country.capital}`);
    const populationElement = screen.getByText(`Population: ${formatNumbers(country.population)}`);
    const currencyElement = screen.getByText(`Currency: ${getFormattedList(country.currencies)}`);
    const languageElement = screen.getByText(`Languages: ${getFormattedList(country.languages)}`);

    expect(flagElement).toBeDefined();
    expect(titleElement).toHaveTextContent(country.name);
    expect(capitalElement).toBeDefined();
    expect(populationElement).toBeDefined();
    expect(currencyElement).toBeDefined();
    expect(languageElement).toBeDefined();
  });
});
