import React, { Component } from 'react';
import './Navigation.css'


class Navigation extends Component {
    navigation = (destination) => {
        this.props.onNavigation(destination)
    }
    render() {
        return (
            <>
                <nav>
                    <button onClick={() => this.props.onNavigation('acceuil')}>Acceuil</button>
                    <button onClick={() => this.props.onNavigation('heure')}>Heure</button>
                    <button onClick={() => this.props.onNavigation('configuration')}>Configuration</button>
                </nav> 
            </>
        );
    }
}

export default Navigation;

