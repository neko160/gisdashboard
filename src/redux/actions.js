import { login_in } from '../services/login-service';


function _login() {
    return dispatch => {
        return login_in()
            .then(token => {

                dispatch({
                    type: 'LOGGED_IN',
                    token
                });
                return token[2];

            }).catch(error => {

                dispatch({
                    type: 'NOT_LOGGED',
                    error
                });
                return error[0];
            });
    };
};

export { _login };