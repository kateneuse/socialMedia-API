const router = require('express').Router();
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  endShip,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(addUser);

router.route('/:userId').get(getUser).post(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(endShip);

module.exports = router;