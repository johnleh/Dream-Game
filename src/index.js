import React from 'react';
import ReactDOM from 'react-dom';
import './StyleSheet.css'
import App from './App';
import HowTo from './HowTo';

 class Index extends React.Component {
    startGame() {
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    startHowTo() {
        ReactDOM.render(<HowTo />, document.getElementById('root'));
    }

    render(){
        return(
            <div className="page">
                <header>
                    <h1 className="textWithMargin">Please Wake Up</h1>
                    <h3 className="textWithMargin">We Miss You</h3>
                </header>
                <button className="button" onClick={() => this.startGame()}>Try To Wake Up</button>
                <button className="button" onClick={() => this.startHowTo()}>How To Play</button>
            </div>
        );
    }
}

 ReactDOM.render(<Index/>, document.getElementById('root'));
