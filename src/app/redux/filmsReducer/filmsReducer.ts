import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { TYPE_FILMS } from './filmActionTypes'

const initialState = {
    films: []
}

// @ts-ignore
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPE_FILMS: {
            console.log(state)
            const id = state.films.findIndex((films: { id: any }) => films.id === payload.id)

            if (id === -1) {
                // @ts-ignore
                state.films.push(payload)
            }

            return {...state, films: [...state.films]};
        }

        default:
            return state
    }
}

const persistConfig = {
    key: 'app.films',
    storage,
}

export const filmsReducer = persistReducer(persistConfig, reducer)
