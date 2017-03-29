import { combineReducers } from 'redux';
import paginate from './paginate';

import {
  SUBPRIMERS_FETCH_REQUEST,
  SUBPRIMERS_FETCH_SUCCESS,
  SUBPRIMERS_FETCH_FAILURE,

  SUBPRIMER_URLS_REQUEST,
  SUBPRIMER_URLS_SUCCESS,
  SUBPRIMER_URLS_FAILURE,

  SUBPRIMER_ATTRIBUTED_URLS_REQUEST,
  SUBPRIMER_ATTRIBUTED_URLS_SUCCESS,
  SUBPRIMER_ATTRIBUTED_URLS_FAILURE,
} from '../actions/subprimer';

import {
  CONTENT_RECENT_URLS_REQUEST,
  CONTENT_RECENT_URLS_SUCCESS,
  CONTENT_RECENT_URLS_FAILURE,
} from '../actions/content';

// Updates the pagination data for different actions.
const pagination = combineReducers({
  subprimers: paginate({
    mapActionToKey: action => "created",
    types: [
      SUBPRIMERS_FETCH_REQUEST,
      SUBPRIMERS_FETCH_SUCCESS,
      SUBPRIMERS_FETCH_FAILURE,
    ],
  }),

  subprimerUndescribedUrls: paginate({
    mapActionToKey: action => action.id,
    types: [
      SUBPRIMER_URLS_REQUEST,
      SUBPRIMER_URLS_SUCCESS,
      SUBPRIMER_URLS_FAILURE,
    ],
  }),

  subprimerAttributedUrls: paginate({
    mapActionToKey: action => action.id,
    types: [
      SUBPRIMER_ATTRIBUTED_URLS_REQUEST,
      SUBPRIMER_ATTRIBUTED_URLS_SUCCESS,
      SUBPRIMER_ATTRIBUTED_URLS_FAILURE,
    ],
  }),

  contentRecentUrls: paginate({
    mapActionToKey: action => "created",
    types: [
      CONTENT_RECENT_URLS_REQUEST,
      CONTENT_RECENT_URLS_SUCCESS,
      CONTENT_RECENT_URLS_FAILURE,
    ]
  }),
});

export default pagination;
