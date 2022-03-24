const express = require('express');
const router = express.Router();
const messagesController = require("./../controllers/messages");

router.get('/api/v1/messages', messagesController.getAll);
router.post("/api/v1/messages", messagesController.create);

module.exports = router;