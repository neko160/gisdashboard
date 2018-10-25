import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'

class RedesSociales extends React.Component {
    state = { activeA : 'Chilquinta', activeA2 : 'Current'}

    handleAClick = (e, { name }) => {
        this.setState({ activeA: name })
        console.log(name);
    }

    render() {
        const { activeA } = this.state

        return (
            <div className="redes_sociales_wrapper">
                {/*<Button color='facebook' className="redes_sociales_menuitem">
                    <Icon name='facebook' /> Facebook
                </Button>
                <Button color='twitter' className="redes_sociales_menuitem">
                    <Icon name='twitter' /> Twitter
                </Button>
                */}

                <Menu className="header2_menu" inverted>
                <Menu.Item
                    key='Facebook'
                    name='Facebook'
                    active={activeA === 'Facebook'}
                    color='blue'
                    onClick={this.handleAClick}
                    className="redes_sociales_menuitem">
                     <Icon name='facebook' size='large' />
                        Facebook
                    </Menu.Item>
                    

                <Menu.Item
                    key='Twitter'
                    name='Twitter'
                    active={activeA === 'Twitter'}
                    color='teal'
                    onClick={this.handleAClick}
                    className="redes_sociales_menuitem">
                     <Icon name='twitter' size='large'/>
                        Twitter
                    </Menu.Item> 
                    
                    </Menu>
            </div>
        );
    }
}

export default RedesSociales;

