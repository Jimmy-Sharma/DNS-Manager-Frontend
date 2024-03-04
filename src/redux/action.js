import axios from "axios";
import * as actionTypes from "./actionType";

export const getContacts = (contacts) => ({
    type: actionTypes.GET_CONTACTS,
    payload: contacts,
});

export const addContactSuccess = (contact) => ({
    type: actionTypes.ADD_CONTACT,
    payload: contact,
});

export const updateContactSuccess = (contact) => ({
    type: actionTypes.UPDATE_CONTACT,
    payload: contact,
});
export const getContactByIdSuccess = (contact) => ({
    type: actionTypes.GET_SINGLE_CONTACT,
    payload: contact,
});

export const deleteContactSuccess = (contactId) => ({
    type: actionTypes.DELETE_CONTACT,
    payload: contactId,
});

export const getAllContacts = () => async (dispatch) => {
    try {
        const response = await axios.get("https://phonebook-spbu.onrender.com/api/contacts");
        console.log(response.data);
        dispatch(getContacts(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const getContactById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`https://phonebook-spbu.onrender.com/api/contacts/${id}`);
        dispatch(getContactByIdSuccess(response.data));
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

export const addContact = (contact) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("https://phonebook-spbu.onrender.com/api/contact", contact);
            dispatch(addContactSuccess(response.data.contact));
        } catch (error) {
            console.error(error);
        }
    };
};

export const updateContact = (id, contact) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`https://phonebook-spbu.onrender.com/api/contacts/${id}`,contact);
            dispatch(updateContactSuccess(response.data.contact));
        } catch (error) {
            console.error(error);
        }
    };
};


export const deleteContact = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`https://phonebook-spbu.onrender.com/api/contacts/${id}`);
            dispatch(deleteContactSuccess(id));
        } catch (error) {
            console.error(error);
        }
    };
};