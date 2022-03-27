const express = require('express');
const router = express.Router();
const messagesController = require("./../controllers/messages");


router.get('/api/v1/messages', messagesController.getAll);

router.get('/api/v1/messages/:id', messagesController.getId);

router.post("/api/v1/messages", messagesController.create);

router.put("/api/v1/messages/:id", messagesController.update);


module.exports = router;