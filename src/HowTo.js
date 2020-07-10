import React from 'react';

class HowTo extends React.Component {

    backToMenu(){
        window.location.reload(false);
    }

    render(){
        return(
            <div className="page">
                <header>
                    <h1 className="textWithMargin">How to Play</h1>
                    <h3 className="textWithMargin">[Temporary Text] At this stage the game is easy, just learn the one patter that shows that you are dreaming, areas might change so look around more then once (Hint: Balloon). The text at the top is temporary and will be changed to messages that may help you.</h3>
                </header>
                <button className="button" onClick={() => this.backToMenu()}>Back</button>
            </div>
        );
    }
}

export default HowTo