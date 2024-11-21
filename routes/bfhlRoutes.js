const express = require('express');
const router = express.Router();
const { handlePostRequest, handleGetRequest } = require('../controllers/bfhlController');

// POST /bfhl
router.post('/', handlePostRequest);

// GET /bfhl
router.get('/', handleGetRequest);

module.exports = router;
