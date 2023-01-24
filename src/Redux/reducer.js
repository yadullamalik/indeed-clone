import { GET_DATA } from "./action";

const init = {
  data: [],
};

export const reducer = (store = init, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...store,
        data: action.payload,
      };
    default:
      return store;
  }
};
