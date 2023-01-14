import { ActionTypes } from "../../actions/action-types"

const initialState = {
    games: [],
    searchResult: [],
    searchId: [],
    game: {},
    order: 0,
    page: 1,
    isLoad: false
}

export const gameReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.FETCH_GAME : return {
            ...state,
            games: payload
        }
        case ActionTypes.SEARCH_ID : return {
            ...state,
            searchId: payload
        }
        case ActionTypes.SEARCH_GAME : return {
            ...state,
            searchResult: payload
        }
        case ActionTypes.SELECTED_GAME : return {
            ...state,
            game: payload
        }
        case ActionTypes.REMOVE_SELECTED_GAME : return {
            ...state,
            game: {}
        }
        case ActionTypes.NEXT_PAGE : return {
            ...state,
            page: state.page + 1,
            order: state.order + 20,
        }
        case ActionTypes.PREV_PAGE : return {
            ...state,
            page: state.page - 1,
            order: state.order - 20
        }
        case ActionTypes.RESET_PAGE : return {
            ...state,
            page: 1
        }
        case ActionTypes.IS_LOADING : return {
            ...state,
            isLoad: payload
        }
        default : return state;
    }
}