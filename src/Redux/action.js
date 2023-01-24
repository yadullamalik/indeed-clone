import axios from "axios";

export const GET_DATA = "GET_DATA";

export const getData = (page) => (dispatch) => {
  return axios
    .get(`https://dead-pinafore-wasp.cyclic.app/job?page=${page}&limit=10`)
    .then((r) => {
      dispatch({ type: GET_DATA, payload: r.data });
    })
    .catch((e) => console.log("e:", e));
};
