const ACTIONS = {
  ADD_PRODUCT: "add-product",
  REMOVE_PRODUCT: "remove-product",
  TOGGLE_PRODUCT: "toggle-product",
};

export function addProduct(data) {
  return {
    type: ACTIONS.ADD_PRODUCT,
    payload: data,
  };
}

export function removeProduct(id) {
  return {
    type: ACTIONS.REMOVE_PRODUCT,
    payload: id,
  };
}

export function toggleProduct(id) {
  return {
    type: ACTIONS.TOGGLE_PRODUCT,
    payload: id,
  };
}

export default ACTIONS;
