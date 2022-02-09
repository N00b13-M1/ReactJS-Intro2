import React, {Component} from 'react'
import DemoComponent from '../DemoComponent';
import Navigation from './Navigation';
import logo from './logo.svg'
import DisplayTime from './DisplayTime';

class Header extends Component {
    // constructor(currentPage,formatTime)
    //     super(currentPage,formatTime)
        
    // const (formatTime, setformatTime) = useState(phpTime)

    state = {
        formatTime : "phpTime",
    }

    currentPage = "heure"
    
    onNavigationParent = (destination) =>{
        this.currentPage = destination;
        console.log(this.currentPage);
    }

    showTime = (format) =>{
        console.log(format);
        this.setState({
            formatTime : format
        });
    }

    render() {
        return (
            <header className="App-header">
                <Navigation onNavigation={this.onNavigationParent} />
                <img src={logo} className="App-logo" alt="logo" />
                {this.currentPage}
                { this.currentPage === "acceuil" && 
                    <DemoComponent/>
                }
                { this.currentPage === "heure" &&
                    <div>
                        <DisplayTime format={this.state.formatTime} />
                        <div className="m-auto">
                            <button onClick={() => this.showTime('jsTime')}>JavaScript</button>
                            <button onClick={() => this.showTime('phpTime')}>PHP</button>
                            <button onClick={() => this.showTime('humanTime')}>Human</button>
                        </div>
                    </div>
                }
            </header>
        );
    }   
}

export default Header

