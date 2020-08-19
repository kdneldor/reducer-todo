export const UPDATE_ITEM = "UPDATE_ITEM";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ITEM:
      return { ...state, item: action.payload, completed: false };
    case TOGGLE_COMPLETED:
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};
