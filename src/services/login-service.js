import { conf } from './config';
import $ from 'jquery';
import getLayer from './layers-service';
import kernel from  "esri/kernel";

//Loguear para obtener token

function login_in() {

    var promise = new Promise((resolve, reject) => {

        const data = {
            username: conf().user,
            password: conf().pass,
            client: 'requestip',
            expiration: 1440,
            format: 'jsonp'
        };

        const url = getLayer.read_token_url();

        $.ajax({
            method: 'POST',
            url: url,
            data: data,
            dataType: 'html'
        })
            .done(token => {
                
                if (token.indexOf('Exception') >= 0) {
                    reject([false, 'Login incorrecto, intente nuevamente']);
                }
                if (token.indexOf('error') >= 0) {
                    reject([false, 'Login incorrecto, intente nuevamente']);
                }

                var t = {
                    "server": getLayer.read_service_url(),
                    "userId": conf().user,
                    "token": token,
                    "ssl": false,
                    "expires": 7200
                };

                kernel.id.registerToken(t);

                resolve([true, 'OK', token]);
                
            }).fail(error => {
                console.log(error, "error");
                reject([false, `Problema ${error}`]);
            });

    });

    return promise;
};

export { login_in };