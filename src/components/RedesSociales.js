import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

class RedesSociales extends React.Component {
    render() {
        return (
            <div className="redes_sociales_wrapper">
                <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                </Button>
                <Button color='twitter'>
                    <Icon name='twitter' /> Twitter
                </Button>

            </div>

        );
    }
}

export default RedesSociales;

