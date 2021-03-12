module.exports = {
    PORT:3000,
    HOST:'127.0.0.1',
    database:{
        uri:"mongodb://localhost:27017/projectNode",
    },
    globalVariable:(req,res,next)=>{
        res.locals.seccess_message=req.flash("success"),
        res.locals.error_message    =req.flash("error");
        next();
    }
}