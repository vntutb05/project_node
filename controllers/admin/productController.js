const productModel = require('../../models/productModel');
const cateModel = require('../../models/categoryModel');
const {validationResult} = require('express-validator');
// index product
let index = async (req,res)=>{
    try{
        let result = await productModel.find({isDeleted:0});
        return res.render('admin/product/',{data:result});
    }catch(err){
        return res.status(400).json(err);
    }
};
// function get add product
let getAdd = async (req,res)=>{
    try{
        let cate = await cateModel.find({isDeleted:0});
        return res.render('admin/product/add',{cate:cate});
    }catch(err){
        return res.status(400).json(err);
    }
};
// function post add product
let postAdd = async (req,res)=>{
    let param = req.body;
    let data = {
        name :param.name,
        tag : param.tag,
        price : param.price,
        sale :param.sale,
        description : param.description,
        cateId : param.category,
        isDeleted : 0
    }
    let errors = validationResult(req);
    try{
        if(!errors.isEmpty()){
            errors = errors.array();
            let data = param;
            return res.render('admin/product/add',{data:data,errors:errors});
        }
        await productModel.create(data);
        return res.redirect('/admin/product');
    }catch(err){
        return res.status(400).json(err);
    }
};
// function get edit product
let getEdit = async(req,res)=>{
    let id = req.params.id;
    try{
        let result = await productModel.findOne({_id:id});
        if(result === null){
            return res.render('admin/404');
        }
        let cate = await cateModel.find({isDeleted:0});
        return res.render('admin/product/edit',{data : result,cate:cate});
    }catch(err){
        return res.status(400).json(err);
    }
};
// function post edit product
let postEdit = async(req,res)=>{
    let param = req.body;
    let id = req.params.id;
    let data = {
        name :param.name,
        tag : param.tag,
        price : param.price,
        sale :param.sale,
        description : param.description,
        cateId : param.category
    }
    let errors = validationResult(req);
    try {
        if(!errors.isEmpty()){
            errors = errors.array();
            let data = param;
            data._id =id;
            return res.render('admin/product/edit',{data:data,errors:errors});
        }
        await productModel.updateOne({_id:id},{$set:data});
        return res.redirect('/admin/product/');
    } catch(err){
        return res.status(400).json(err);
    }
};
// function delete
let _delete = async(req,res)=>{
    let id = req.params.id;
    try{
        let foundProduct = await productModel.findOne({_id:id});
        if(foundProduct === null ){
            return res.render('admin/404');
        }
        await productModel.updateOne({_id:id},{$set:{isDeleted:1}});
        return res.redirect('/admin/product/');
    }catch(err){
        return res.status(400).json(err);
    }
}

module.exports = {
    index : index,
    getAdd :getAdd,
    postAdd :postAdd,
    getEdit :getEdit,
    postEdit :postEdit,
    delete : _delete

}