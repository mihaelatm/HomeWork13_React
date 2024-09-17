const initialState = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Carla" },
    { id: 4, name: "Jack" },
    { id: 5, name: "Jane" },
  ],
  filter: "",
};

const SET_FILTER = "SET_FILTER";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state; // Returnează starea curentă pentru acțiunile neprocesate
  }
};
