const categoryModel = require('../../models/categoryModel');
const {validationResult} = require('express-validator');
module.exports = {
    index : async(req,res)=>{
        try{
            let result = await categoryModel.find({isDeleted:0});
            return res.render('admin/cate/index',{data:result});
        }catch(err){
            return res.status(500).json(err);
        }
    },
    getAdd :async (req,res)=>{
        return res.render('admin/cate/add');
    },
    postAdd :async(req,res)=>{
        let param = req.body;
        let errors = validationResult(req);
        let data = {
            name:param.name,
            description:param.description,
            isDeleted:0
        }
        try{
            if(!errors.isEmpty()){
                let error = errors.array();
                let data = param;
                return res.render('admin/cate/add',{errors:error,data:data});
            };
            await categoryModel.create(data);
            return res.redirect('/admin/cate/');
        }catch(err){
            return res.status(500).json(err);
        }
    },
    getEdit :async (req,res)=>{
        let id = req.params.id;
        try{
            let result = await categoryModel.findOne({_id:id});
            if(result === null){
                return res.render('/admin/404');
            }
            return res.render('admin/cate/edit',{data:result});
        }catch(err){
            return res.status(400).json(err);
        }
    },
    postEdit :async (req,res)=>{
        let param = req.body;
        let data = {
            name : param.name,
            description :param.description
        };
        let id = req.params.id;
        let errors = validationResult(req);
        try{
            if(!errors.isEmpty()){
                let error = errors.array();
                let data = param;
                data._id = id;
                return res.render('admin/cate/edit',{errors:error,data:data});
            }
            await categoryModel.updateOne({_id:id},{$set:data});
            return res.redirect('/admin/cate/');
        }catch(err){
            return res.status(500).json(err);
        }
    },
    delete : async (req,res)=>{
        let id = req.params.id;
        try{   
            let findCate = await categoryModel.findOne({_id:id});
            await categoryModel.updateOne({_id:id},{$set:{isDeleted:1}});
            if(findCate === null){
                return res.render('admin/404');
            }
            return res.redirect('/admin/cate/');
        }catch(err){   
            return res.status(400).json(err);
        }
    }
}