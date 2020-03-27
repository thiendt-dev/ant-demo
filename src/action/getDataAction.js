import {
    GET_DATA_EPLOYEES,
    GET_DATA_EPLOYEES_SUCCESS,
    GET_DATA_EPLOYEES_ERROR
} from '../constants/index'

export function getData() {
    return {
        type: GET_DATA_EPLOYEES,
    }
}

export function getDataSuccess(data) {
    return {
        type: GET_DATA_EPLOYEES_SUCCESS,
        payload: data
    }
}

export function getDataError(err) {
    return {
        type: GET_DATA_EPLOYEES_ERROR,
        payload: err
    }
}