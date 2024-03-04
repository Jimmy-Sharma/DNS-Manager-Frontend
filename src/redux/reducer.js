import * as actionTypes from "./actionType";

const initialState = {
    contacts: [],
    selectedContact: null,
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CONTACTS:
            return { ...state, contacts: action.payload };
        case actionTypes.GET_SINGLE_CONTACT:
            return { ...state, selectedContact: action.payload };
        case actionTypes.ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, action.payload] };
        case actionTypes.UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((el) =>
                    el._id === action.payload._id ? action.payload : el
                ),
            };
        case actionTypes.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((el) => el._id !== action.payload),
            };

        default:
            return state;
    }
};