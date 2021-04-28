module.exports = {
    PORT:3000 || process.env.PORT,
    HOST:'127.0.0.1',
    database:{
        uri:"mongodb://localhost:27017/projectNode",
    },
    globalVariable:(req,res,next)=>{
        res.locals.success_message=req.flash("success"),
        res.locals.error_message    =req.flash("error");
        next();
    }
}