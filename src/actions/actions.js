const ACTIONS = {
  ADD_PRODUCT: "add-product",
  REMOVE_PRODUCT: "remove-product",
  ADD_QUANTITY: "add-quantity",
  REMOVE_QUANTITY: "remove-quantity",
  ADD_FAVOURITE: "add-favourite",
  REMOVE_FAVOURITE: "remove-favourite",
};

export function addProduct(data) {
  return {
    type: ACTIONS.ADD_PRODUCT,
    payload: data,
  };
}

export function addFavourite(data) {
  return {
    type: ACTIONS.ADD_FAVOURITE,
    payload: data,
  };
}

export function removeFavourite(id) {
  return {
    type: ACTIONS.REMOVE_FAVOURITE,
    payload: id,
  };
}

export function removeProduct(id) {
  return {
    type: ACTIONS.REMOVE_PRODUCT,
    payload: id,
  };
}

export function addQuantity(id) {
  return {
    type: ACTIONS.ADD_QUANTITY,
    payload: id,
  };
}
export function removeQuantity(id) {
  return {
    type: ACTIONS.REMOVE_QUANTITY,
    payload: id,
  };
}

export default ACTIONS;
