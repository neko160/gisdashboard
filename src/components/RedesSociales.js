import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

class RedesSociales extends React.Component {
    state = { activeA : 'Chilquinta', activeA2 : 'Current'}

    handleAClick = (e, { name }) => {
        this.setState({ activeA: name })
        console.log(name);
    }

    render() {
        const { activeA } = this.state

        return (
            <Header as='h2' className="redes_sociales_wrapper">
                <Icon className="banner_title" name='twitter' />
                <Header.Content className="banner_title">Twitter Timeline</Header.Content>
               
            </Header>
        );
    }
}

export default RedesSociales;

