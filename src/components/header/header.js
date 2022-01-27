import logo from '../../logo.svg';
import React, { Component } from 'react';
import DemoComponent from '../DemoComponent';


class Header extends Component {
    render() {
        let dateCourante = new Date();
        let tempsJavascript = dateCourante.getTime()
        let tempsPHP = dateCourante
        let year = dateCourante.getFullYear()
        return (
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Temps Javascripts {tempsJavascript} millisecondes</p>
                    <p>Temps PHP {tempsPHP/1000} millisecondes</p>
                    <p>Today is {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{year} millisecondes</p>
                    <DemoComponent/>
                    </header>
        );
    }
}

export default Header;