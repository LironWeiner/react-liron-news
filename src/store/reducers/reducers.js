import * as actionTypes from '../actions/actions';

const initialState = {
    data: [],
    pageNumber: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PAGE_INCREMENT:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            };
        case actionTypes.GET_NEWS:
            return {
                ...state,
                pageNumber: state.pageNumber + 1,
                data: state.data
            };
        default:
            return state;
    }
};

export default reducer;