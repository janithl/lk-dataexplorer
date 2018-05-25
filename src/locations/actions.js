export const FETCH_LOCATIONS_REQUEST = "locations/fetch/request";
export const FETCH_LOCATIONS_SUCCESS = "locations/fetch/success";
export const FETCH_LOCATIONS_FAILURE = "locations/fetch/failure";

export const fetchLocations = () => (dispatch, getState, { API }) => {
  dispatch({
    type: FETCH_LOCATIONS_REQUEST
  });

  API.fetchLocations()
    .then(response =>
      dispatch({
        type: FETCH_LOCATIONS_SUCCESS,
        payload: API.parseLocations(response)
      })
    )
    .catch(error => dispatch({ type: FETCH_LOCATIONS_FAILURE, error }));
};
