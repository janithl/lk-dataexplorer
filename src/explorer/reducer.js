export default function reducer(state = {}, action = null) {
  switch (action.type) {
    case "gotcha":
      return { ...state, [action.payload.key]: action.payload.values };
    default:
      return state;
  }
}
