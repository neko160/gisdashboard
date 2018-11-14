import env from './config';


const getLayer = () => {

    var serviceMain, serviceURL;

    (env.BUILDFOR == "INTERNA") ? serviceMain = 'https://gisredint.chilquinta/arcgis/' : serviceMain = 'https://gisred.chilquinta.cl:6443/arcgis/';

    serviceURL = `${serviceMain}rest/services/`;

    return {
        read_token_url() {
            return `${serviceMain}tokens/generateToken`;
        },
        read_service_url(){
            return serviceURL;
        },
        read_seds() {
            //return serviceURL + "Chilquinta_006/Equipos_pto_006/MapServer?f=json&token=" + token;
            return serviceURL + "Interrupciones/PO_WEB_EXT/MapServer";
        },
        read_campamentos() {
            //return serviceURL + "MANTENIMIENTO/Otras_Capas/MapServer/4?f=json&token=" + token;
            return serviceURL + "MANTENIMIENTO/Otras_Capas/MapServer/4";
        },
        read_unidad_vecinal() {
            //return serviceURL + "MANTENIMIENTO/Otras_Capas/MapServer/0?f=json&token=" + token;
            return serviceURL + "MANTENIMIENTO/Otras_Capas/MapServer/0";
        },
        read_clientes() {
            //return serviceURL + "Chilquinta_006/ClientesV2/MapServer/0?f=json&token=" + token;
            return serviceURL + "Chilquinta_006/ClientesV2/MapServer/0";
        },
        read_red() {
            return serviceURL + "Chilquinta_006/Tramos_006/MapServer";
        },
        read_sedInfo(){
            return serviceURL + "Chilquinta_006/Equipos_pto_006/MapServer/1";
        }
        
    };
};


export default getLayer();