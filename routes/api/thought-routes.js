const router = require("express").Router();

const {
  getThoughts,
  addThought,
  getThoughtByID,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/
router.route("/").get(getThoughts);

// /api/thoughts/:userId/
router.route("/:userId/").post(addThought);

// /api/thoughts/:thoughtId/
router
  .route("/:userId/:commentId")
  .get(getThoughtByID)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions/
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionID/

router.route("/:thoughtId/:reactions/:reactionId").delete(deleteReaction);

module.exports = router;
