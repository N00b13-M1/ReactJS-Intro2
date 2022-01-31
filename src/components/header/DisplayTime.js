import React, { Component } from 'react';

class DisplayTime extends Component {
    currentPage = "heure";
    
    render() {
        let dateCourante = new Date();
        let tempsJavascript = dateCourante.getTime()
        let tempsPHP = tempsJavascript/1000

        return (
                <div>
                    <p>Temps Javascripts {tempsJavascript} millisecondes
                    </p>
                    <p>Temps PHP {tempsPHP} millisecondes
                    </p>
                    <p>Today is {dateCourante.getDate()}/{dateCourante.getMonth() + 1}/{dateCourante.getFullYear()} millisecondes
                    </p>
                </div>)
    }
}

export default DisplayTime;