import * as actionTypes from './actionTypes';
import { instance, apiKey, pageSize } from '../../axios-news';
import { getCalculatedFromDate } from '../utility';
import { pathNames } from '../../pathList';

export const fetchNewsFailed = (error) => {
    return {
        type: actionTypes.FETCH_NEWS_FAILED,
        error: error
    };
};

export const setErrorNull = () => {
    return {
        type: actionTypes.SET_ERROR_NULL
    };
};

export const setNews = (data) => {
    return {
        type: actionTypes.SET_NEWS,
        data: data
    };
};

export const resetState = () => {
    return {
        type: actionTypes.RESET_STATE
    };
};

const fetchFromApi = (dispatch, apiFetchString) => {
    instance.get(apiFetchString)
        .then(response => {
            dispatch(setNews(response.data.articles));
        })
        .catch(error => {
            dispatch(fetchNewsFailed(error));
        });
};

export const initNews = (match) => {
    return (dispatch, getState) => {
        switch (match.path) {
            case pathNames.Home:
                fetchFromApi(dispatch, '/top-headlines?country=il&pageSize=' + pageSize + '&apiKey=' + apiKey);
                break;
            case pathNames.Us:
                fetchFromApi(dispatch, '/everything?q=politics+united states&from=' + getCalculatedFromDate(3) + '&language=en&sortBy=publishedAt&pageSize='
                    + pageSize + '&page=' + getState().pageNumber + '&apiKey=' + apiKey);
                break;
            case pathNames.World:
                fetchFromApi(dispatch, '/everything?q=world&from=' + getCalculatedFromDate(3) + '&sortBy=publishedAt&language=en&pageSize='
                    + pageSize + '&page=' + getState().pageNumber + '&apiKey=' + apiKey);
                break;
            case pathNames.Sports:
                fetchFromApi(dispatch, '/top-headlines?country=il&category=sports&pageSize=' + pageSize + '&apiKey=' + apiKey);
                break;
            case pathNames.Tech:
                fetchFromApi(dispatch, '/everything?q=technology+israel&sortBy=publishedAt&from='
                    + getCalculatedFromDate(3)
                    + '&pageSize=' + pageSize + '&page=' + getState().pageNumber + '&apiKey=' + apiKey);
                break;
            case pathNames.Business:
                fetchFromApi(dispatch, '/top-headlines?country=il&category=business&pageSize=' + pageSize + '&apiKey=' + apiKey);
                break;
            case pathNames.Bitcoin:
                fetchFromApi(dispatch, '/everything?q=bitcoin&from=' + getCalculatedFromDate(10)
                    + '&sortBy=publishedAt&language=en&pageSize='
                    + pageSize + '&page=' + getState().pageNumber + '&apiKey=' + apiKey);
                break;
            default:
                break;
        }
    };
};