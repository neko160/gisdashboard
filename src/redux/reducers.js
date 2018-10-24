import { combineReducers } from 'redux';

//creacion de reducers

function login(state = {
    token: ''
}, action) {
    switch (action.type) {
        case 'LOGGED_IN':
            return { ...state, token: action.token[2] };
            break;

        default:
            return state;

    }
}

function toolbar(state = {
    layerListVisibility: false
}, action) {
    switch (action.type) {
        case 'TOGGLE_LAYERLIST_VISIBILITY':
            return { ...state, layerListVisibility: action.visible };
            break;

        default:
            return state;

    }
};


function campamentos(state = {
    listado: []
}, action) {
    switch (action.type) {

        case 'GET_LISTADO_CAMPAMENTOS':
            return { ...state, listado: action.listado };
            break;

        case 'ERROR_LISTADO_CAMPAMENTOS':
            return { ...state, listado: action.error };
            break;
           
        default:
            return state;
            break;
    }
}

/* configuracion de reducers */

const appReducer = combineReducers({
    login, toolbar, campamentos
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;