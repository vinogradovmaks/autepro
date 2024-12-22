// Assuming we have a class defined for creating topics request data
class CreateTopicsRequestData {
    constructor() {
        this.topics = [];
    }

    addTopic(topic) {
        this.topics.push(topic);
    }
}

// Creating a new instance of CreateTopicsRequestData
var topicsRequestData = new CreateTopicsRequestData();

// Adding topics to the request data
topicsRequestData.addTopic("Technology");
topicsRequestData.addTopic("Science");

// Now topicsRequestData contains data for the topics "Technology" and "Science"
console.log(topicsRequestData.topics); // Output: ["Technology", "Science"]
