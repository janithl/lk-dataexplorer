import {
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
  FILTER_LOCATIONS
} from "./actions";

const initialState = {
  locations: {},
  fetching: false,
  errorCode: null,
  filter: ""
};

export default function reducer(state = initialState, action = null) {
  switch (action.type) {
    case FETCH_LOCATIONS_REQUEST:
      return {
        ...state,
        fetching: true
      };

    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        fetching: false,
        locations: action.payload
      };

    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        fetching: false
      };

    case FILTER_LOCATIONS:
      return {
        ...state,
        filter: action.payload.filter
      };

    default:
      return state;
  }
}
