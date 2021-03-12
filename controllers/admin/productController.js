const productModel = require('../../models/productModel');

module.exports = {
    index :(req,res)=>{
        productModel.find((err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    getAdd:(req,res)=>{
        return res.status(200).json('get add product');
    },
    postAdd:(req,res)=>{
        let data = req.body;
        productModel.create(data,(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    getEdit:(req,res)=>{
        return res.status(200).json('Get edit product');
    },
    postEdit:(req,res)=>{
        let data = req.body;
        let id = req.params.id;
        productModel.updateOne({_id:id},{$set:data},(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    },
    delete:(req,res)=>{
        let id = req.params.id;
        productModel.updateOne({_id:id},{$set:{isDeleted:1}},(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(result);
        })
    }
}