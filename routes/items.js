const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// GET /api/items
router.get('/', itemsController.getAllItems);

module.exports = router;
