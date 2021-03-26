const userModel = require('../../models/userModel');
const {validationResult} = require('express-validator');
module.exports = {
    index:(req,res)=>{
        userModel.find({isDeleted:0},(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.render('admin/user/index',{data:result});
        })
    },
    getAdd : (req,res)=>{
        return res.render('admin/user/add');
    },
    postAdd : (req,res)=>{
        let param = req.body;
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('admin/user/add',{errors:errors.array()});
        }
        let data = {
            email:param.email,
            name:param.name,
            address:param.address,
            phone:param.phone,
            password:param.password,
            isAdmin:param.power,
            isDeleted:0
        }
        userModel.find({email:params.email},function(err,result){
            if(result.length>0){
                return res.redirect("/admin/user/add");
            }else if(result.length==0){
                userModel.create(data,function(err1,resultCre){
                    if(err1){
                        return res.status(500).json(err1);
                    }else{
                        return res.redirect("/admin/user/");
                    }
                })
                
            }
        });
    },
    getEdit : (req,res)=>{
        let id = req.params.id;
        userModel.findOne({_id:id},(err,result)=>{
            if(result == null){
                return res.redirect('/admin/404');
            }
            if(err){
                return res.status(500).json(err);
            }
            return res.render('admin/user/edit',{data:result});
        })
    },
    postEdit :(req,res)=>{
        let id = req.params.id;
        let param = req.body;   
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            let data = param;
            data._id=id;
            return res.render('admin/user/edit',{errors:errors.array(),data:data});
        }
        let data = {
            name : param.name,
            email : param.email,
            address :param.address,
            phone : param.phone,
            isAdmin:param.power
        }
        if(param.password){
            data.password = param.password
        }
        userModel.updateOne({_id:id},{$set:data},(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            return res.redirect('/admin/user/');
        })
    },
    delete :(req,res)=>{
        let id = req.params.id;
        userModel.updateOne({_id:id},{$set:{isDeleted:1}},(err,result)=>{
            if(result == null){
                return res.redirect('/admin/404');
            }
            if(err){
                return res.status(500).json(err);
            }
            return res.redirect('/admin/user');
        })
    }
}