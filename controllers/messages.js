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
    const id = req.params.id;
    const response = {
        status: "success",
        message: `getting message with id ${id}`,
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
    let username = req.body.user;
    let message = req.body.text;

    const response = {
        status: "success",
        message: `POSTING a new message for user ${username}`,
        data: {
            messages: [
                {
                    "username": username,
                    "messages": message
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

const deleteMessage = (req, res) => {
    const response = {
        status: "success",
        message: "DELETING a message with id id",
        data: {
            messages: [
                {
                    "messages": "The message was removed"
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
module.exports.deleteMessage = deleteMessage;