export const ADD_TODO = "ADD_TODO";
export const TOGGLE_DONE = "TOGGLE_DONE";

export const initialState = [
  {
    todo: "Learn about reducers",
    done: false,
    id: 3892987589,
  },
  {
    todo: "Organize Garage",
    done: false,
    id: 1528817077286,
  },
  {
    todo: "Bake Cookies",
    done: false,
    id: 1528817084358,
  },
];

export const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { todo: action.payload, done: false, id: Date.now() }];
    case TOGGLE_DONE:
      return [...state, { done: !state.done }];
    default:
      return state;
  }
};
