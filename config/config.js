module.exports = {
    PORT:3000 || process.env.PORT,
    database:{
        //uri:"mongodb://db:27017/projectNode",
        uri : "mongodb://mongo:okhSnYkPHk7bFUOvmuEn@containers-us-west-6.railway.app:5614"
    },
    globalVariable:(req,res,next)=>{
        res.locals.success_message=req.flash("success"),
        res.locals.error_message    =req.flash("error");
        next();
    }
}
