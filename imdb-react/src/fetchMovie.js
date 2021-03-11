// import {
//   fetchMoviePending,
//   fetchMovieSuccess,
// } from "./redux/IsSearchActions.js";
// import { useSelector, useDispatch } from "react-redux";
// import { API_URL, API_KEY } from "./config";

// function fetchMovie() {
//   const mid = useSelector((state) => state.mid);

//   return (dispatch) => {
//     dispatch(fetchMoviePending());
//     fetch(`${API_URL}movie/${mid}?api_key=${API_KEY}&language=en-US`)
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.error) {
//           throw res.error;
//         }
//         dispatch(fetchMovieSuccess(res));
//         return res;
//       })
//       .catch((error) => {});
//   };
// }

// export default fetchMovie;
