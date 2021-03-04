import { Country } from '../../utils';
import { Action } from './actions';
import { ActionType } from './action-types';
import { initialState } from './initialState';

interface CountryState {
  loading: boolean;
  error: string | null;
  countries: Country[];
}

export const CountryReducer = (state: CountryState = initialState, action: Action): CountryState => {
  switch (action.type) {
    case ActionType.FETCH_COUNTRIES_LOADING:
      return { loading: true, error: null, countries: [] };
    case ActionType.FETCH_COUNTRIES_SUCCESS:
      return {
        loading: false,
        error: null,
        countries: action.payload,
      };
    case ActionType.FETCH_COUNTRIES_FAILURE:
      return {
        loading: false,
        error: action.payload,
        countries: [],
      };
    default:
      return state;
  }
};
