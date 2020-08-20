export const UPDATE_NAME = "UPDATE_NAME";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export const initialState = [
  {
    name: "Learn about reducers",
    done: false,
    id: 3892987589,
  },
  {
    name: "Organize Garage",
    done: false,
    id: 1528817077286,
  },
  {
    name: "Bake Cookies",
    done: false,
    id: 1528817084358,
  },
];

export const Reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, item: action.payload, completed: false };
    case TOGGLE_COMPLETED:
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};
