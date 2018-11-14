import React from 'react';
import Map from 'esri/map';
import { connect } from 'react-redux';
import { _login } from '../redux/actions';
import ArcGISDynamicMapServiceLayer from 'esri/layers/ArcGISDynamicMapServiceLayer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import getLayer from '../services/layers-service';
import LayerList from 'esri/dijit/LayerList';
import getInfoTemplate from '../services/infoTemplates';

var map;

class Mapa extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

    }

    componentDidMount() {
        map = new Map("map", {
            center: [-71.6022, -33.1397],
            zoom: 6,
            basemap: "dark-gray",
            sliderStyle: "small"
        });

        const { login_ } = this.props;

        var l = login_()
            .then(token => {

                var interrupciones = new ArcGISDynamicMapServiceLayer(getLayer.read_seds(), { id: "Interrupciones", "showAttribution": false });
                interrupciones.setInfoTemplates({
                    0: {infoTemplate: getInfoTemplate.getSectorCentroide()}
                  });
    
                  interrupciones.refreshInterval = 1;
                  interrupciones.setImageFormat("png32");
                //var campamentos = new FeatureLayer(getLayer.read_campamentos(), { id: "Campamentos", "showAttribution": false });

                //var unidad_vecinal = new FeatureLayer(getLayer.read_unidad_vecinal(), { id: "Unidad Vecinal", "showAttribution": false });

                //var redes = new ArcGISDynamicMapServiceLayer(getLayer.read_red(), { id: "Redes", "showAttribution": false });

                //LayerList Widget:
               /* var llWidget = new LayerList({
                    map: map,
                    layers: [
                        {
                            layer: seds,
                            id: "SSEE",
                            subLayers: true
                        }, {
                            layer: campamentos,
                            id: "Campamentos",
                            subLayers: true
                        }, {
                            layer: unidad_vecinal,
                            id: "Unidad Vecinal",
                            subLayers: true
                        },
                        {
                            layer: redes,
                            id: "Redes",
                            subLayers: true
                        }],
                    showLegend: true,
                    showOpacitySlider: true
                }, "layerList");
                llWidget.startup();
                */
                map.addLayers([interrupciones]);

            }).catch(error => {
                console.log('error :', error);
            });
    }
    render() {
        const { visible } = this.state;

        return (
      
                <div id="map"></div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login_: () => dispatch(_login())
    };
};


const mapStateToProps = (state) => {
    return {
        token: state.login.token
    };

};

export {map};
export default connect(mapStateToProps, mapDispatchToProps)(Mapa);