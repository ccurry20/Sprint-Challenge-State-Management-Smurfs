import { FETCHING_SMURFS, SMURF_FETCH_SUCCESS, SMURF_FETCH_ERROR, SMURF_ADDED} from "../smurfAction/index";

const initialState = { smurfs: [], fetchingSmurfs: false, addingSmurf: false, error:""};

export const smurfReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURFS: 
        return Object.assign({}, state, {fetchingSmurfs: true});

        case SMURF_FETCH_SUCCESS:
            return Object.assign ({}, state, {
                smurfs: [...state.smurfs, ...action.payload],
                fetchingSmurfs: false
            });

            case SMURF_FETCH_ERROR: 
            return Object.assign({}, state, {
                fetchingSmurfs: false, 
                error: "Error fetching Smurfs"
            });
            case SMURF_ADDED:
                return{...state, smurfs: [...action.payload]}
            default: 
            return state; 
    }
};