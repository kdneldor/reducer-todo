export const ADD_TODO = "ADD_TODO";
export const TOGGLE_DONE = "TOGGLE_DONE";
export const CLEAR_DONE = "CLEAR_DONE"

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
      const toggle = (todoId) => {
        console.log(toggle);
        state.map((todo) => {
          if (todoId === todo.id) {
            return [
              ...state,
              {
                done: !todo.done,
                id: Date.now(),
              },
            ];
          }
        });
      };
    case CLEAR_DONE:
      return state.filter((todo) => !todo.done)
    default:
      return state;
  }
};
