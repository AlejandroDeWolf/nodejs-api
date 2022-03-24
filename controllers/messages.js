const Message = require("./../models/message");


const getAll = (req, res) => {
    const response = {
        status: "success",
        data: {
            messages: [
                {
                    "username": "Elon",
                    "messages": "JS is ez"
                },
                {
                    "username": "Alejandro",
                    "messages": "JS is not ez"
                }
            ]
        }
    }
    res.json(response); //moet mooi teruggegeven worden als json
};

const create = async (req, res) => { //asnyc enkel bij functies waar je moet wachten
    //message saven
    let username = req.body.username; //body is vergelijkbaar met $_POST array in php
    let message = req.body.message;

    let m = new Message();
    m.username = username;
    m.message = message;
    await m.save(); //mongoose model en await gaat enkel op asynchrone functies

    res.send("POSTING a new messages");
};

module.exports.getAll = getAll; //wordt opengesteld zodat deze functie aangeroepen kan worden in andere files zoals bij de routers
module.exports.create = create;