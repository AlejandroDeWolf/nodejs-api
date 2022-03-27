const Message = require("./../models/message");


const getAll = (req, res) => {
    const response = {
        status: "success",
        message: "GETTING messages",
        data: {
            messages: [
                {
                    "username": "John",
                    "messages": "Hello"
                },
                {
                    "username": "Jane",
                    "messages": "Hi"
                }
            ]
        }
    }

    res.json(response); //moet mooi teruggegeven worden als json
};

const getId = (req, res) => {
    const response = {
        status: "success",
        message: "GETTING message 1",
        data: {
            messages: [
                {
                    "username": "John",
                    "messages": "Hello"
                }
            ]
        }
    }

    res.json(response); //moet mooi teruggegeven worden als json
};

const create = (req, res) => {
    const response = {
        status: "success",
        message: "POSTING a new message for user Pikachu",
        data: {
            messages: [
                {
                    "username": "Pikachu",
                    "messages": "Nodejs isn’t hard, or is it?"
                }
            ]
        }
    }

    res.send("POSTING a new message for user Pikachu");
};

const update = (req, res) => {
    const response = {
        status: "success",
        message: "UPDATING a message with id id",
        data: {
            messages: [
                {
                    "username": "Pikachu",
                    "messages": "Nodejs is really hard!"
                }
            ]
        }
    }

    res.json(response);
};

module.exports.getAll = getAll; //wordt opengesteld zodat deze functie aangeroepen kan worden in andere files zoals bij de routers
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;