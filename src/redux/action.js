import axios from "axios";
import * as actionTypes from "./actionType";

export const getDomains = (domain) => ({
    type: actionTypes.GET_DOMAINS,
    payload: domain,
});

export const addDomainSuccess = (domain) => ({
    type: actionTypes.ADD_DOMAIN,
    payload: domain,
});

export const updateDomainSuccess = (domain) => ({
    type: actionTypes.UPDATE_DOMAIN,
    payload: domain,
});
export const getDomainByIdSuccess = (domain) => ({
    type: actionTypes.GET_SINGLE_DOMAIN,
    payload: domain,
});

export const deleteDomainSuccess = (domainId) => ({
    type: actionTypes.DELETE_DOMAIN,
    payload: domainId,
});

export const getAllDomains = () => async (dispatch) => {
    try {
        const response = await axios.get("https://dns-manager-backend.onrender.com/api/domains");
        console.log(response.data);
        dispatch(getDomains(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const getDomainById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`https://dns-manager-backend.onrender.com/api/domains/${id}`);
        dispatch(getDomainByIdSuccess(response.data));
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

export const addDomain = (domain) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("https://dns-manager-backend.onrender.com/api/domain", domain);
            dispatch(addDomainSuccess(response.data.domain));
        } catch (error) {
            console.error(error);
        }
    };
};

export const updateDomain = (id, domain) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`https://dns-manager-backend.onrender.com/api/domains/${id}`,domain);
            dispatch(updateDomainSuccess(response.data.domain));
        } catch (error) {
            console.error(error);
        }
    };
};


export const deleteDomain = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`https://dns-manager-backend.onrender.com/api/domains/${id}`);
            dispatch(deleteDomainSuccess(id));
        } catch (error) {
            console.error(error);
        }
    };
};