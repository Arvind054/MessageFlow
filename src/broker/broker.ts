import Topic = require("./topic");


/* Broker is the Central Coordinator.
    it Creates Topics, Route messages, serve consumers.
*/
class Broker{
    private topics = new Map<string, Topic>();

    createTopic(topicName: string){
         this.topics.set(topicName, new Topic());
    }

    getTopic(topicName: string){
        return this.topics.get(topicName);
    }
}

export  = Broker;