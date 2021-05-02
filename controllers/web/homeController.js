const productModel = require('../../models/productModel');
const cateModel = require('../../models/categoryModel');
const homePage ={
    home :'home',
    blog : 'blog',
    contact : 'contact',
    about : 'about',
    shop : 'shop'
}
let home = async(req,res)=>{
    try{
        let popularProduct = await productModel.find({popular:true}).limit(3);
        let topProduct = await productModel.find({hot:true}).limit(6);
        let cates = await cateModel.find({isDeleted:0});
        return res.render('web/layout/master',{
            content :homePage.home,
            data:{
                popularProduct : popularProduct,
                topProduct : topProduct,
                cates : cates
            }
        })
    }catch(err){
        return res.status(500).json({
            type:'error',
            msg: err
        })
    }
}
let blog = async(req,res)=>{
    try{
        let cates = await cateModel.find({isDeleted:0});
        return res.render('web/layout/master',{
            content :homePage.blog,
            data:{
                cates:cates
            }
        })
    }catch(err){
        return res.status(500).json({
            type:'error',
            msg: err
        })
    }
}
let about = async(req,res)=>{
    try{
        let popularProduct = await productModel.find({popular:true}).limit(2);
        let cates = await cateModel.find({isDeleted:0});
        return res.render('web/layout/master',{
            content :homePage.about,
            data:{
                cates:cates,
                popularProduct : popularProduct
            }
        })
    }catch(err){
        return res.status(500).json({
            type:'error',
            msg: err
        })
    }
}
let contact = async(req,res)=>{
    try{
        let cates = await cateModel.find({isDeleted:0});
        return res.render('web/layout/master',{
            content :homePage.contact,
            data:{
                cates:cates
            }
        })
    }catch(err){
        return res.status(500).json({
            type:'error',
            msg: err
        })
    }
}
let shop = async(req,res)=>{
    try{
        let slug = req.params.slug;
        let products = await productModel.find({cateId:slug});
        let popularProduct = await productModel.find({popular:true}).limit(5);
        let cates = await cateModel.find({isDeleted:0});
        return res.render('web/layout/master',{
            content :homePage.shop,
            data :{
                products : products,
                cates : cates,
                popularProduct : popularProduct
            }
        })
    }catch(err){
        return res.status(500).json({
            type:'error',
            msg: err
        })
    }
}
module.exports = {
    home:home,
    blog : blog,
    contact : contact,
    about : about,
    shop : shop
}