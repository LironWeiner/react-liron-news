import * as actionTypes from './actionTypes';
import { instance, apiKey, pageSize } from '../../axios-news';
import { getCalculatedFromDate } from '../utility';
import { pathNames } from '../../pathList';

// export const pageIncrement = () => {
//     return {
//         type: actionTypes.PAGE_INCREMENT
//     };
// };

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

export const initNews = (match, pageNumber) => {
    return dispatch => {
        switch (match.path) {
            case pathNames.Home:
                instance.get('/top-headlines?country=il&pageSize=' + pageSize + '&apiKey=' + apiKey)
                    .then(response => {
                        dispatch(setNews(response.data.articles));
                    })
                    .catch(error => {
                        dispatch(fetchNewsFailed(error));
                    });
                break;
            case pathNames.Us:
                instance.get('/everything?q=politics+united states&from=' + getCalculatedFromDate(3) + '&language=en&sortBy=publishedAt&pageSize='
                    + pageSize + '&page=' + pageNumber + '&apiKey=' + apiKey)
                    .then(response => {
                        dispatch(setNews(response.data.articles));
                    })
                    .catch(error => {
                        dispatch(fetchNewsFailed(error));
                    });
                break;
            case pathNames.World:
                instance.get('/everything?q=world&from=' + getCalculatedFromDate(3) + '&sortBy=publishedAt&language=en&pageSize='
                    + pageSize + '&page=' + pageNumber + '&apiKey=' + apiKey)
                    .then(response => {
                        dispatch(setNews(response.data.articles));
                    })
                    .catch(error => {
                        dispatch(fetchNewsFailed(error));
                    });
                break;
            case pathNames.Sports:
                instance.get('/top-headlines?country=il&category=sports&pageSize=' + pageSize + '&apiKey=' + apiKey)
                    .then(response => {
                        dispatch(setNews(response.data.articles));
                    })
                    .catch(error => {
                        dispatch(fetchNewsFailed(error));
                    });
                break;
            case pathNames.Tech:
                instance.get('/everything?q=technology+israel&sortBy=publishedAt&from=' + getCalculatedFromDate(3) + '&pageSize=' + pageSize + '&page=' + pageNumber + '&apiKey=' + apiKey)
                    .then(response => {
                        dispatch(setNews(response.data.articles));
                    })
                    .catch(error => {
                        dispatch(fetchNewsFailed(error));
                    });
                break;
            case pathNames.Business:
                instance.get('/top-headlines?country=il&category=business&pageSize=' + pageSize + '&apiKey=' + apiKey)
                    .then(response => {
                        dispatch(setNews(response.data.articles));
                    })
                    .catch(error => {
                        dispatch(fetchNewsFailed(error));
                    });
                break;
            case pathNames.Bitcoin:
                {
                    instance.get('/everything?q=bitcoin&from=' + getCalculatedFromDate(10)
                        + '&sortBy=publishedAt&language=en&pageSize='
                        + pageSize + '&page=' + pageNumber + '&apiKey=' + apiKey)
                        .then(response => {
                            dispatch(setNews(response.data.articles));
                        })
                        .catch(error => {
                            dispatch(fetchNewsFailed(error));
                        });
                    break;
                }
            default:
                break;
        }
    };
};