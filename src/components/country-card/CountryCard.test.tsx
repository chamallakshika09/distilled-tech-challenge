import { render, screen } from '@testing-library/react';
import { COUNTRIES, formatNumbers } from '../../utils';
import { CountryCard } from './CountryCard';

describe('CountryCard', () => {
  it('should render a single country card', () => {
    const country = COUNTRIES[0];
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
