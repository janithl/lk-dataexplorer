import { DATASETS } from "../common/constants";

export const FETCH_DATASET_REQUEST = "explorer/fetch/request";
export const FETCH_DATASET_SUCCESS = "explorer/fetch/success";
export const FETCH_DATASET_FAILURE = "explorer/fetch/failure";

export const TOGGLE_META_OPTIONAL = "explorer/meta/toggle";

export const fetchDataset = id => (dispatch, getState, { API }) => {
  dispatch({ type: FETCH_DATASET_REQUEST });
  API.fetchDataset(DATASETS[id].url)
    .then(response =>
      dispatch({
        type: FETCH_DATASET_SUCCESS,
        payload: API.parseDataset(response)
      })
    )
    .catch(error => dispatch({ type: FETCH_DATASET_FAILURE, error }));
};

export const toggleVisibility = key => ({
  type: TOGGLE_META_OPTIONAL,
  payload: { key }
});
