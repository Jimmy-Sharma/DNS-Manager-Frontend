import * as actionTypes from "./actionType";

const initialState = {
    domains: [],
    selectedDomain: null,
};

export const domainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DOMAINS:
            return { ...state, domains: action.payload };
        case actionTypes.GET_SINGLE_DOMAIN:
            return { ...state, selectedDomain: action.payload };
        case actionTypes.ADD_DOMAIN:
            return { ...state, domains: [...state.domains, action.payload] };
        case actionTypes.UPDATE_DOMAIN:
            return {
                ...state,
                domains: state.domains.map((el) =>
                    el._id === action.payload._id ? action.payload : el
                ),
            };
        case actionTypes.DELETE_DOMAIN:
            return {
                ...state,
                domains: state.domains.filter((el) => el._id !== action.payload),
            };

        default:
            return state;
    }
};