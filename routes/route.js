const express = require('express')
const router = express.Router();

const {getAUser, getAllUsers, createUser, deleteUser, updateUser} = require('../controller/controller');

router.route('/getalluser').get(getAllUsers);
router.route('/getuser/:email').get(getAUser);
router.route('/createuser').post(createUser);
router.route('/updateuser/:email').patch(updateUser)
router.route('/deleteuser/:email').delete(deleteUser);


module.exports = router;