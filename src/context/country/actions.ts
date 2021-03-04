import { Country } from '../../utils';
import { ActionType } from './action-types';

interface FetchCountriesLoadingAction {
  type: ActionType.FETCH_COUNTRIES_LOADING;
}

interface FetchCountriesSuccessAction {
  type: ActionType.FETCH_COUNTRIES_SUCCESS;
  payload: Country[];
}

interface FetchCountriesFailureAction {
  type: ActionType.FETCH_COUNTRIES_FAILURE;
  payload: string;
}

export type Action = FetchCountriesLoadingAction | FetchCountriesSuccessAction | FetchCountriesFailureAction;
