const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router({ strict:true });

// router.get('/',questionController.profile_redirect);
router.get('/Questions',questionController.question_post_profile);
router.get('/Answers',questionController.answer_post_profile);

module.exports=router;

