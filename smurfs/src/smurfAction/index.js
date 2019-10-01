import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_ERROR = "SMURF_FETCH_ERROR";
export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const fetchSmurf = () => {
    const promise = 
    axios.get(`http://localhost:3333/smurfs`);
    return dispatch => {
        dispatch({ type: FETCHING_SMURFS }); 
        promise
        .then(response => {
            dispatch ({ type: SMURF_FETCH_SUCCESS, payload: response.data});
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SMURF_FETCH_ERROR});
        });
    };
};

export const addNewSmurf = (newSmurf) => dispatch => {
    dispatch({ type: ADDING_SMURF});

    axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then( response => {
        dispatch({ type: SMURF_ADDED, payload:response.data});
    })
    .catch(error => {
        dispatch({type: ADD_SMURF_ERROR})
    });
};

