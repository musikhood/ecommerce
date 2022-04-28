import ACTIONS from "../actions/actions";

export default function searchReducer(state = "", { type, payload }) {
  switch (type) {
    case ACTIONS.SEARCH:
      return payload;
    default:
      return state;
  }
}
