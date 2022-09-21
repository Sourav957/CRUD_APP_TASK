
const express = require('express');
const router = express.Router();
const {getAllTasks,createtask,getTask,updateTask,deleteTask} = require('../controllers/tasks');

//setup the router

router.route('/').get(getAllTasks).post(createtask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;