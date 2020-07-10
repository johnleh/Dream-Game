import React from 'react';
import './StyleSheet.css';

import win0 from './images/var0/win0.png'
import sleepDeath0 from './images/var0/sleepDeath0.png'

import getMessage from './getMessage.js'
import getImage from './getImage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      topMessage: "Am I dreaming?",
      dreaming: 1,
      alive: true,
      direction: 0,
      daysLeft: 31,
      weirdDirection: 6,
      messageDelay: Math.floor(Math.random()*5 + 1),
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

isWeird() {
  if(this.state.direction === this.state.weirdDirection && Math.floor(Math.random()*2) === 1) {
    return true;
  }
  return false;
}

handleKeyPress(e) {
  if(!this.state.alive || !this.state.daysLeft) {
    if (e.keyCode === 13) {
      window.location.reload(false);
    }
    return;
  }
    if (e.keyCode === 38 && this.state.direction < 4) {
      this.changeDirection(0);
    } else if (e.keyCode === 40 && this.state.direction > 3) {
      this.changeDirection(0);
    } else if (e.keyCode === 37 && this.state.direction < 4) {
      this.changeDirection(2);
    } else if (e.keyCode === 39 && this.state.direction < 4) {
      this.changeDirection(1);
    } else if (e.keyCode === 87) {
      this.handleClick(1);
    } else if (e.keyCode === 83) {
      this.handleClick(0);
    }
    
}

componentDidMount(){
  document.addEventListener("keydown", this.handleKeyPress);
}
componentWillUnmount(){
  document.removeEventListener("keydown", this.handleKeyPress);
}

  handleClick(clickType) {
    if (clickType === this.state.dreaming) {
      const message =  getMessage(1,1,clickType,0,0,0);
      this.setState(() => ({
        topMessage: message,
        dreaming: Math.floor(Math.random()*2),
        daysLeft: this.state.daysLeft - 1,
        direction: 0,
        weirdDirection: Math.floor(Math.random()*8),
      }));
    } else {
      const message = getMessage(1,0,clickType,0,0,0);
      this.setState(() => ({
        topMessage: message,
        alive: false,
      }));
    }
  }

  changeDirection(buttonNumber){
    if (buttonNumber === 2){
      this.setState(() => ({
        messageDelay: this.state.messageDelay -1,
        direction: this.state.direction > 0 ? this.state.direction - 1 : 3,
      }));
    } else if (buttonNumber === 1) {
      this.setState(() => ({
        messageDelay: this.state.messageDelay -1,
        direction: this.state.direction < 3 ? this.state.direction + 1 : 0,
      }));
    } else {
      this.setState(() => ({
        messageDelay: this.state.messageDelay -1,
        direction: this.state.direction > 3 ? this.state.direction%4 : this.state.direction + 4,
      }));
    }
  }

  render(){
    if(this.state.messageDelay === 0 && this.isWeird() && this.state.alive) {
      this.setState(() => ({
        topMessage: getMessage(0,0,0,this.isWeird(),this.state.dreaming,this.state.direction),
        messageDelay: 1,
      }));
    } else if (this.state.messageDelay === 0  && this.state.alive){
      this.setState(() => ({
        topMessage: getMessage(0,0,0,this.isWeird(),this.state.dreaming,this.state.direction),
        messageDelay: Math.floor(Math.random()*6),
      }));
    }
    if (this.state.alive && this.state.daysLeft > 0) {
      return(
        <div className="page">
          <h4 className="text">{"Day "+ (31 - this.state.daysLeft)}</h4>
          <h4 className="text">{this.state.topMessage}</h4>

          {this.state.direction > 3 ? "" : 
          <button className="directionButton" onClick={() => this.changeDirection(2)}>{"←"}</button>
          }
          <div className="divider"/> <div className="divider"/>
          {this.state.direction > 3 ? 
          <button className="directionButton" onClick={() => this.changeDirection(0)}>{"↓"}</button>
          :
          <button className="directionButton" onClick={() => this.changeDirection(0)}>{"↑"}</button>
          }
          <div className="divider"/> <div className="divider"/>
            
          {this.state.direction > 3 ? "" : 
          <button className="directionButton" onClick={() => this.changeDirection(1)}>{"→"}</button>
          }
            
            {getImage(this.state.dreaming, this.isWeird(), this.state.direction,0)}
            
            <button className="actionButton" onClick={() => this.handleClick(1)}>(W)ake Up</button>
            <div className="divider"/>
            <button className="actionButton" onClick={() => this.handleClick(0)}>(S)leep</button>
        
        </div>
      );
    } else if (this.state.alive) {
      return(
        <div className="page">
          <img className="winImage" src={win0} alt=""/>
          <h4 className="text">You gain your hold on reality! Refresh (press enter) to play again</h4>

        </div>
        
      );
    } else {
      return(
      <div className="page">
        <h4 className="text">{this.state.topMessage}</h4>
        <h4 className="text">Game Over, refresh (press enter) to live again</h4>
        <img className="deathImage" src={sleepDeath0} alt=""/>
      </div>
      );
    }
  }
}

export default App;