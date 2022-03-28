const Message = require("./../models/message");


const getAll = (req, res) => {
    if (req.query.user) {
        const response = {
            status: "success",
            data: {
                "user": req.query.user,
                "message": `getting message with username ${req.query.user}`,
            }
        }
        res.json(response); //moet mooi teruggegeven worden als json
    }
    else {
        const response = {
            status: "success",
            message: "GETTING messages",
            data: {
                messages: [
                    {
                        "username": "John",
                        "message": "Hello"
                    },
                    {
                        "username": "Jane",
                        "message": "Hi"
                    }
                ]
            }
        }
        res.json(response);
    }

};

const getId = (req, res) => {
    const id = req.params.id;
    const response = {
        status: "success",
        message: `GETTING message with id ${id}`,
        data: {
            messages: [
                {
                    "username": "John",
                    "message": "Hello"
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
        message: `POSTING a new message`,
        data: {
            messages: [
                {
                    "username": username,
                    "message": message
                }
            ]
        }
    }

    res.json(response);
};

const update = (req, res) => {
    const id = req.params.id;
    const response = {
        status: "success",
        message: `UPDATING message with id ${id}`,
        data: {
            messages: [
                {
                    "username": "Pikachu",
                    "message": "Nodejs is really hard!"
                }
            ]
        }
    }

    res.json(response);
};

const deleteMessage = (req, res) => {
    const id = req.params.id;
    const response = {
        status: "success",
        message: `DELETING message with id ${id}`,
        data: {
            messages: [
                {
                    "message": "The message was removed"
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