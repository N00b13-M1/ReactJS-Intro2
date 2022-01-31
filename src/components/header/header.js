import React, { Component } from 'react';
import hey from './logo.svg';
import DemoComponent from '../DemoComponent';
import Navigation from './navbar/navigation'
import DisplayTime from './DisplayTime';


class Header extends Component {
    currentPage = "heure";
    
    render() {
        let pageContent ;
        if (this.currentPage === "acceuil"){
            pageContent = <DemoComponent/>;
        }
        else{
        
            pageContent = <DisplayTime/>;
        }
        
        return (
            <header className="App-header">
                <Navigation />
                <img src={hey} className="App-logo" alt="logo" />
                {this.currentPage}
                {pageContent}
                
            </header>

        );
    }
}

export default Header;