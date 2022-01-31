import React, { Component } from 'react';
import hey from './logo.svg';
import DemoComponent from '../DemoComponent';
import Navigation from './navbar/navigation'
import DisplayTime from './DisplayTime';


class Header extends Component {
    currentPage = "acceuil";
    
    render() {

    return(
            <header className = "App-header" >
                <Navigation />
                <img src={hey} className="App-logo" alt="logo" />
                {this.currentPage}
                {this.currentPage === "acceuil" && <DemoComponent/>
                }
                {this.currentPage === "heure" && <DisplayTime/>}
            </header>
        );
    }
}

export default Header;