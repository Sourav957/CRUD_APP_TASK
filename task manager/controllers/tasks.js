const Task = require('../models/tasks');

const getAllTasks = async(req,res) => {
   try{
    const tasks = await Task.find({});
    res.status(200).json({tasks})
   }catch(error){
    res.status(500).json({msg:err});
   }
}

const createtask = async (req,res) =>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});   
    }catch(err){
        res.status(500).json({msg:err});
    }
   
}
const getTask = async(req,res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        res.status(200).json({task});
        if(!task){
          return  res.status(404).json({msg:`NO task with id ${taskID}`});
        }
    }catch(err){
        res.status(500).json({msg:err});
    }
   

}
const updateTask = async(req,res) => {
    try{
        const {id:taskID} = req.params;
        const data = req.body;
        const task  = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return  res.status(404).json({msg:`NO task with id ${taskID}`});
          }
              res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
   
}
const deleteTask = async(req,res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return  res.status(404).json({msg:`NO task with id ${taskID}`});
          }
          res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg:error});
    }
   
}

module.exports = {
    getAllTasks,createtask,getTask,updateTask,deleteTask
}