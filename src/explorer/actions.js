import { DATASETS } from "../common/constants";

export const fetchDataset = id => (dispatch, getState, { API }) => {
  API.fetchDataset(DATASETS[id].url)
    .then(response =>
      dispatch({
        type: "gotcha",
        payload: {
          key: id,
          values: API.objectify(response, "polling-division")
        }
      })
    )
    .catch(error => console.error(error));
};
