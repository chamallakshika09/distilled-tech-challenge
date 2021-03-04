import { Dispatch } from 'react';
import { ActionType } from './action-types';
import { Action } from './actions';

export const fetchCountries = async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.FETCH_COUNTRIES_LOADING });
  try {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await response.json();
    dispatch({ type: ActionType.FETCH_COUNTRIES_SUCCESS, payload: countries });
  } catch (error) {
    dispatch({ type: ActionType.FETCH_COUNTRIES_FAILURE, payload: error.message });
  }
};
