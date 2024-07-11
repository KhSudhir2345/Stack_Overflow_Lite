const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router({ strict:true });

router.post('/:qid/answers',questionController.answer_post);
router.get('/addQuestion', questionController.question_create_get);
router.get('/', questionController.question_index);
router.post('/', questionController.question_create_post);
router.get('/:qid/answers/:aid?', questionController.question_details);
router.get('/:id/answer', questionController.add_answer_get);

// router.delete('/:id', questionController.question_delete);

module.exports = router;