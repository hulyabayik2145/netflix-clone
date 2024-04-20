
import axios from "axios";
import { ActionTypes } from "../actionTypes"
import { options } from "../../constants";


// api dan filmleri alır ve store a gönderen aksiyon
export const getPopular = () => (dispatch) => {
    // yüklenme durumunu reducere haber veriyorum
    dispatch({ type: ActionTypes.MOVİES_LOADING });

    //api dan populer filmleri al

    axios.get("https://api.themoviedb.org/3/movie/popular", options)
        // başarılı olursa reducere bildir
        .then((res) =>
            dispatch({
                type: ActionTypes.MOVİES_SUCCESS,
                payload: res.data.results,
            }))
        //başarısız olursa reducer a bildir.
        .catch((err) => dispatch({
            type: ActionTypes.MOVİES_ERROR,
            payload: err.message,
        }))


}