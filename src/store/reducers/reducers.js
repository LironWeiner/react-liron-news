import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
    isLoading: true,
    pageNumber: 1,
    error: null
};

const formatNewsResponse = (articles) => {
    //const { data } = this.state;    

    // Format the data from get request to the data i need
    const newArticles = articles.map(article => {
        const res = {
            title: article.title,
            url: article.url,
            urlToImage: article.urlToImage
        };

        return res;
    });

    // Remove duplicates from the new data
    for (let i = 0; i < newArticles.length; i++) {
        for (let j = 0; j < newArticles.length; j++) {
            if (i !== j && newArticles[i].url === newArticles[j].url) {
                newArticles.splice(j, 1);
            }
        }
    }

    //return [...data, ...newArticles];
    return newArticles;
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_FAILED:
            return {
                ...state,
                error: action.error
            };
        case actionTypes.SET_ERROR_NULL:
            return {
                ...state,
                error: null
            };
        case actionTypes.SET_NEWS:
            {
                const newFormatedData = formatNewsResponse(action.data);
                const mergedData = [...state.data, ...newFormatedData];

                return {
                    ...state,
                    isLoading: false,
                    data: mergedData,
                    pageNumber: state.pageNumber + 1
                };
            }
        case actionTypes.RESET_STATE:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default reducer;