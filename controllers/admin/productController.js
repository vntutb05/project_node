const productModel = require('../../models/productModel');

let index = async (req,res)=>{
    try{
        let result = await productModel.find({isDeleted:0});
        return res.render('admin/product/',{data:result});
    }catch(err){
        return res.status(400).json(err);
    }
};
let getAdd = async (req,res)=>{
    return res.render('admin/product/add');
};
let postAdd = async (req,res)=>{
    let param = req.body;
    let data = {
        name :param.name,
        tag : param.tag,
        price : param.price,
        sale :param.sale,
        description : param.description
    }
    try{
        await productModel.create(data);
        return res.redirect('/admin/product');
    }catch(err){
        return res.status(400).json(err);
    }
};
let getEdit = async(req,res)=>{
    let id = req.params.id;
    try{
        let result = await productModel.findOne({_id:id});
        return res.render('admin/product/edit',{data : result});
    }catch(err){
        return res.status(400).json(err);
    }
};
let postEdit = async(req,res)=>{

};
let _delete = async(req,res)=>{

}

module.exports = {
    index : index,
    getAdd :getAdd,
    postAdd :postAdd,
    getEdit :getEdit,
    postEdit :postEdit,
    delete : _delete

}