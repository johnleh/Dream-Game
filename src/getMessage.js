import DREAM_MESSAGES from "./Messages/DREAM_MESSAGES"
import AWAKE_MESSAGES from "./Messages/AWAKE_MESSAGES"
import VAGUE_DREAM_MESSAGES from "./Messages/VAGUE_DREAM_MESSAGES"
import VAGUE_AWAKE_MESSAGES from "./Messages/VAGUE_AWAKE_MESSAGES"
import GOOD_MESSAGES from "./Messages/GOOD_MESSAGE"
import BAD_MESSAGES from "./Messages/BAD_MESSAGES"

var pastVarient = -1;
var varient = Math.floor(Math.random()*2);

export default function getMessage(buttonMessage, goodMessage, wakeup, isWeird, isDreaming, direction) {
    
    // when more rooms and messages are made there will be different varients
    while(pastVarient === varient) {
        varient = Math.floor(Math.random()*2);
    }

    if(buttonMessage) {
        if(goodMessage) {
            return(GOOD_MESSAGES[varient][wakeup]);
        } else {
            return(BAD_MESSAGES[varient][wakeup]);
        }
    } else {
        if (isWeird) {
            if(isDreaming) {
            return(DREAM_MESSAGES[varient][direction]);  
            } else {
            return(AWAKE_MESSAGES[varient][direction]);  
            }
        } else {
            if(isDreaming) {
                return(VAGUE_DREAM_MESSAGES[varient][direction]);  
                } else {
                return(VAGUE_AWAKE_MESSAGES[varient][direction]);  
                }
        }
    }
    
}