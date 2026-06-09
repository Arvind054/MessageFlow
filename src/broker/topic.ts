import type { MessageType } from '../types/messageTypes';

// Tpoic Class to store different messages.

// Why array is choosen: to internally store messages sequentially and with the help of offset pointer the consumer can access the messagr in O(1) time complexity.

class Topic{
    private messages: MessageType[] = [];
    
    publish( message: MessageType){
        this.messages.push(message);
    }
    getMessages(){
        return this.messages;
    }
}

export = Topic;
