import { ActionTypes } from "../action-types"

export const fetchGame = (games) => {
    return {
        type: ActionTypes.FETCH_GAME,
        payload: games
    }
}

export const selectGame = (game) => {
    return {
        type: ActionTypes.SELECTED_GAME,
        payload: game
    }
}

export const removeSelectedGame = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_GAME,
        payload: null
    }
}

export const isLoading = (load) => {
    return {
        type: ActionTypes.IS_LOADING,
        payload: load
    }
}

export const searchGame = (search) => {
    return {
        type: ActionTypes.SEARCH_GAME,
        payload: search
    }
}

export const getId = (id) => {
    return {
        type: ActionTypes.SEARCH_ID,
        payload: id
    }
}