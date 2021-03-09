const userModel = require('../../models/userModel');

module.exports = {
    index:(req,res)=>{
        userModel.find((err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    getAdd : (req,res)=>{
        return res.status(200).json('Get add user');
    },
    postAdd : (req,res)=>{
        let data = req.body;
        console.log(data);
        userModel.create(data,(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    getEdit : (req,res)=>{
        return res.status(200).json("Get edit user");
    },
    postEdit :(req,res)=>{
        let id = req.params.id;
        let data = req.body;
        userModel.updateOne({_id:id},{$set:data},(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    delete :(req,res)=>{
        let id = req.params.id;
        userModel.updateOne({_id:id},{$set:{isDeleted:1}},(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    }

}