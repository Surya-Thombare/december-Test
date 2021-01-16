import {SEARCH_BY_INGNAME, SEARCH_BY_NAME, SEARCH_BY_INGREDIANT, TOGGLE_COCKTIL_STATE, GET_COCKTAIL} from '../actionTypes'
import axios from "axios";


export const fetchTrendingNews = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COCKTAIL, payload: null });
    dispatch({ type: TOGGLE_COCKTIL_STATE });
    const response = await axios(
      "https://the-cocktail-db.p.rapidapi.com/randomselection.php",
      {
        method: "GET",
        headers: {
          'x-rapidapi-key': '230ca193demshd733f162a356309p16d1bfjsnc21b0f9ae330',
          'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
        }
      }
    );
    dispatch({ type: GET_COCKTAIL, payload: response.data });
    console.log(response)
  } catch (error) {
    console.error("error");
  } finally {
    dispatch({ type: TOGGLE_COCKTIL_STATE });
  }
};


export const fetchByIngrediant = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_BY_INGREDIANT, payload: null });
        const response = await axios(
          `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${searchQuery}`,
          {
            method: "GET",
            headers: {
                'x-rapidapi-key': '230ca193demshd733f162a356309p16d1bfjsnc21b0f9ae330',
                'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
              }
          }
        );
        dispatch({ type: SEARCH_BY_INGREDIANT, payload: response.data });
      } catch (error) {
        console.error("error");
      } finally {
        dispatch({ type: TOGGLE_COCKTIL_STATE });
      }
}

// export const fetchByIngrediant = (searchQuery) => async (dispatch) => {
//     try {
//         dispatch({ type: SEARCH_BY_INGREDIANT, payload: null });
//         const response = await axios(
//           "https://the-cocktail-db.p.rapidapi.com/filter.php",
//           {
//             method: "GET",
//             headers: {
//                 'x-rapidapi-key': '230ca193demshd733f162a356309p16d1bfjsnc21b0f9ae330',
//                 'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
//               }
//           }
//         );
//         dispatch({ type: SEARCH_BY_INGREDIANT, payload: response.data });
//       } catch (error) {
//         console.error("error");
//       } finally {
//         dispatch({ type: TOGGLE_COCKTIL_STATE });
//       }
// }

