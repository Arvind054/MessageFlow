import Broker = require("../broker/broker");

class Consumer{
     private offset = 0;
     constructor(
        private broker : Broker
     ){}

     poll(topicName: string){
        const topic = this.broker.getTopic(topicName);
        if(!topic)return ;

        const messages = topic.getMessages();
        while(this.offset < messages.length){
           console.log(messages[this.offset]);
           this.offset++;
        }
     }
}