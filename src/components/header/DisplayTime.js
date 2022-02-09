import React, { Component } from 'react';

class DisplayTime extends Component {
    
    state = {
        dateCourante : new Date()
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                dateCourante: new Date()
            })
            
        }, 1000);
    }
    
    render() {
        let tempsJavaScript = this.state.dateCourante.getTime();
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
                    Temps pour un humain: {this.state.dateCourante.getDate()}/{this.state.dateCourante.getMonth() + 1}/{this.state.dateCourante.getFullYear()} - {this.state.dateCourante.getHours()}:{this.state.dateCourante.getMinutes()}:{this.state.dateCourante.getSeconds()}
                </p>
                }
            </>
        );
    }
}

export default DisplayTime;