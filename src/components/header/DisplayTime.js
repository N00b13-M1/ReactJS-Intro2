import React, { Component } from 'react';

class DisplayTime extends Component {
    
    currentPage = "heure";
    render() {
        let dateCourante = new Date();
        let tempsJavaScript = dateCourante.getTime();
        let tempsPHP = tempsJavaScript/1000;
        console.log(this.props)

        return (
            <> {this.props.format === "jsTime" &&
                <p>
                    Temps Javascript: {tempsJavaScript} milisecondes
                </p>
                }
                {this.props.format === "phpTime" &&
                <p>
                    Temps PHP: {tempsPHP} secondes
                </p>
                }
                {this.props.format === "humanTime" &&
                <p>
                    Temps pour un humain: {dateCourante.getDate()}/{dateCourante.getMonth() + 1}/{dateCourante.getFullYear()}
                </p>
                }
            </>
        );
    }
}

export default DisplayTime;