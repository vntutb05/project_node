module.exports = {
    notFound:(req,res)=>{
        return res.render("admin/404");
    },
    index:(req,res)=>{
        return res.render("admin/index");
    }
}