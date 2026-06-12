import Broker = require("../broker/broker");

class Producer{
    constructor(
        private broker : Broker
    ){}
   send(
    topicName: string,
    payload: string
   ){
       const topic = this.broker.getTopic(topicName);
      if(!topic)throw new Error("Topic Not Found");

      topic.publish({id: crypto.randomUUID(), payload,timestamp: Date.now()});
   }
}

export  = Producer;