import ACTIONS from "../actions/actions";

let myFavourites = [];

const LOCAL_STORAGE_KEY = "favourites";

const storedFavourites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
if (storedFavourites) {
  myFavourites = storedFavourites;
}

function getDate() {
  const today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  const date =
    today.getFullYear() +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day);

  return date;
}

export default function favouriteReducer(
  state = myFavourites,
  { type, payload }
) {
  switch (type) {
    case ACTIONS.ADD_FAVOURITE:
      const dateTime = getDate();
      const newState1 = [...state, { ...payload, whenAdded: dateTime }];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState1));
      return newState1;
    case ACTIONS.REMOVE_FAVOURITE:
      const newState2 = state.filter((item) => item.id !== payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState2));
      return newState2;
    default:
      return state;
  }
}
