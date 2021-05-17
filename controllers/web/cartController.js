const productModel = require("../../models/productModel");
const cateModel = require('../../models/categoryModel');
const cartMode = require('../../models/invoiceModel');
let cartPage = {
    cart : "cart",
    checkout : "checkout"
}
let addToCart = async(req,res) => {
    let slug = req.params.slug;
    let product = await productModel.findOne({slug:slug});
    if(req.session.cart == undefined){
        req.session.cart =[];
        req.session.cart.push({
            name : product.name,
            slug : product.slug,
            price : product.price,
            image : product.image,
            qty :1,
            total : product.price*1
        })
    }else{
        let cart = req.session.cart;
        let newItem = true;
        for( let i =0;i < cart.length;i++){
            if(cart[i].slug == slug){
                newItem = false;
                cart[i].qty++;
                cart[i].total = cart[i].price*cart[i].qty;
                break;
            }
        }
        if(newItem){
            req.session.cart.push({
                name : product.name,
                slug : product.slug,
                price : product.price,
                image : product.image,
                qty:1,
                total : product.price*1
            })
        }
    }
    return res.redirect('cart');
}
let getCart = async(req,res) => {
    try {
        if(req.session.cart == undefined){
            lengthCart = 0;
        }else{
            lengthCart = req.session.cart.length;
        };
        let cart = req.session.cart;
        let total=0;
        if(cart != undefined){
            for(let i=0;i<cart.length;i++){
                total +=cart[i].total;
            }
        }
        let cates = await cateModel.find();
        return res.render('web/layout/master',{
            content: cartPage.cart,
            data:{
                cart:cart,
                cates : cates,
                total : total,
                lengthCart: lengthCart
            }
        })
    } catch (error) {
        return res.status(500).json({
            type : "Error",
            msg : error
        })
    }
}
let postCart = async(req,res) =>{   
    try{
        let param = req.body;
        console.log(param);
        console.log(req.session.cart)
        let data ={
            infoProduct:req.session.cart,
            infoCustomer:param
        }
        console.log(data);
        await cartModel.create(data);
        return res.reridect('/');
    }catch(error){
        return res.status(500).json({
            type: 'Error',
            msg : error
        })
    }
}

module.exports = {
    addToCart : addToCart,
    getCart : getCart,
    postCart : postCart 
}