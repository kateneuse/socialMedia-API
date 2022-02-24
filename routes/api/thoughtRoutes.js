const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
    updateThoughts,
    deleteThoughts,
    createThoughts,
    getThoughtsById
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts);

router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

router.route('/:userId').post(createThoughts);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export module router
module.exports = router;