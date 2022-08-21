const router = require("express").Router();

const {
  getUsers,
  addUser,
  getUserByID,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getUsers).post(addUser);

// /api/users/:id
router.route("/:id").get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/:id/friends/:friendId
router.route("/:id/friends/:friendId").post(addFriend).post(deleteFriend);

module.exports = router;
