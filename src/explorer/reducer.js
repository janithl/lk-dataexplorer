import {
  FETCH_DATASET_REQUEST,
  FETCH_DATASET_SUCCESS,
  FETCH_DATASET_FAILURE
} from "./actions";

const initialState = {
  metadata: {},
  dataset: {},
  fetching: false
};

export default function reducer(state = initialState, action = null) {
  switch (action.type) {
    case FETCH_DATASET_REQUEST:
      return { ...state, fetching: true };

    case FETCH_DATASET_SUCCESS:
      return { ...state, fetching: false, ...action.payload };

    case FETCH_DATASET_FAILURE:
      return initialState;

    default:
      return state;
  }
}
