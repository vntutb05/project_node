const productModel = require('../../models/productModel');
const cateModel = require('../../models/categoryModel');
const homePage ={
    home :'home',
    blog : 'blog',
    contact : 'contact',
    about : 'about',
    shop : 'shop',
    single : 'single'
}
let home = async(req,res)=>{
    try{
        let popularProduct = await productModel.find({popular:true,isDeleted:0}).limit(3);
        let topProduct = await productModel.find({hot:true,isDeleted:0}).limit(6);
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
        let products = await productModel.find({cateId:slug,isDeleted:0});
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
let single = async (req,res)=>{
    try {
        let cates = await cateModel.find();
        let slug = req.params.slug;
        let detailProduct = await productModel.findOne({slug:slug});
        let popularProduct = await productModel.find({popular:true}).limit(3);
        return res.render('web/layout/master',{
            content : homePage.single,
            data:{
                cates : cates,
                detailProduct : detailProduct,
                popularProduct: popularProduct
            }
        })
    } catch (error) {
        return res.status(500).json({
            type: 'Error',
            msg : error
        })
    }
}
module.exports = {
    home:home,
    blog : blog,
    contact : contact,
    about : about,
    shop : shop,
    single : single
}