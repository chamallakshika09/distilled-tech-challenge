import React, { useReducer, createContext, Dispatch, FC } from 'react';
import { Country } from '../../utils';
import { Action } from './actions';
import { initialState } from './initialState';
import { CountryReducer } from './reducers';

interface CountryState {
  loading: boolean;
  error: string | null;
  countries: Country[];
}

interface ContextType {
  state: CountryState;
  dispatch: Dispatch<Action>;
}

export const CountryContext = createContext<ContextType>({ state: initialState, dispatch: () => null });

export const CountryProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  return <CountryContext.Provider value={{ state, dispatch }}>{children}</CountryContext.Provider>;
};
