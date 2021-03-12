const categoryModel = require('../../models/categoryModel');

module.exports = {
    index : (req,res)=>{
        categoryModel.find((err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    getAdd : (req,res)=>{
        return res.status(200).json("Get add cate");
    },
    postAdd :(req,res)=>{
        let data = req.body;
        categoryModel.create(data,(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    getEdit :(req,res)=>{
        return res.status(200).json("Get edit cate");
    },
    postEdit :(req,res)=>{
        let data = req.body;
        let id = req.params.id;
        categoryModel.updateOne({_id:id},{$set:data},(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    delete :(req,res)=>{
        let id = req.params.id;
        categoryModel.updateOne({_id:id},{$set:{isDeleted:1}},(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    }
}