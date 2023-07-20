const tutorialSchema = require('../model/model');

const getAllUsers = async(req,res) => {
    try{
        const allUsers = await tutorialSchema.find({});
        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({ msg: "No user found" });
          }
        console.log("Serverhit");
        res.status(200).json([...allUsers])
    }catch(err){
        res.status(500).json({msg: err})
    }
}


const getAUser = async(req,res) => {
    try{
        const { email : email } = req.params
        const user = await tutorialSchema.find({email: email});
        if (!user || user.length === 0) {
            return res.status(404).json({ msg: "No user found" });
            }
        console.log("Serverhit");
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({msg: err})
    }
}


const createUser = async(req,res) => {
    try{
        const email = req.body['email']
        console.log(email);
        const existingUser = await tutorialSchema.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ msg: `${email} already exists` });
        }
        console.log(req.body);
        const user = await tutorialSchema.create(req.body);
        console.log("serverhit");
        res.status(200).json({msg: "User added successfully"})
    }catch(err){
        res.status(500).json({msg: err})
    }
}


const deleteUser = async(req,res) => {
    try{
        const { email : email } = req.params
        const user = await tutorialSchema.findOneAndDelete({email: email});
        if (!user) {
            return res.status(404).json({ msg: `No such user with email ${email}`});
        }
        res.status(200).json({msg: `${email} user deleted`})
    }catch(err){
        res.status(500).json({msg: err})
    }
}

const updateUser = async(req,res) => {
    try{
        const { email } = req.params;
        const updateData = req.body;

        const user = await tutorialSchema.findOneAndUpdate({ email: email }, updateData, {
          new: true,
          runValidators: true,
        });
        if (!user) {
            return res.status(404).json({ msg: `No such user with email ${email}`});
        }
        res.status(200).json({msg: `User updated`})
    }catch(err){
        res.status(500).json({msg: err})
    }
}


module.exports = {  createUser,
                    updateUser,
                    getAUser,
                    getAllUsers,
                    deleteUser
                    }