import { types } from "./types"

export const valueReducer = (state, action) => {

    const { payload, type, name } = action

    switch (type) {

        case types.value:
            return {
                ...state,
                [name]: payload,
            }

        default:
            return state
    }
}