import {
  FETCH_DATASET_REQUEST,
  FETCH_DATASET_SUCCESS,
  FETCH_DATASET_FAILURE,
  TOGGLE_META_OPTIONAL
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

    case TOGGLE_META_OPTIONAL:
      return {
        ...state,
        metadata: {
          ...state.metadata,
          [action.payload.key]: {
            ...state.metadata[action.payload.key],
            optional: !state.metadata[action.payload.key].optional
          }
        }
      };

    default:
      return state;
  }
}
