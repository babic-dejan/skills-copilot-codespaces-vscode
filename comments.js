// Create web server

// Require modules
const express = require('express');
const router = express.Router();

// Require database
const db = require('../models');

// Require helper functions
const isLoggedIn = require('../middleware/isLoggedIn');
const isAdmin = require('../middleware/isAdmin');

// Require controller
const commentsCtrl = require('../controllers/comments');

// Require multer for file upload
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

// GET /comments
router.get('/', commentsCtrl.index);

// GET /comments/new
router.get('/new', isLoggedIn, commentsCtrl.new);

// POST /comments
router.post('/', isLoggedIn, upload.single('image'), commentsCtrl.create);

// GET /comments/:id
router.get('/:id', commentsCtrl.show);

// GET /comments/:id/edit
router.get('/:id/edit', isLoggedIn, commentsCtrl.edit);

// PUT /comments/:id
router.put('/:id', isLoggedIn, commentsCtrl.update);

// DELETE /comments/:id
router.delete('/:id', isLoggedIn, commentsCtrl.delete);

module.exports = router;