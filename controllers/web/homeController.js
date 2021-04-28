const homePage ={
    home :'home',
    blog : 'blog',
    contact : 'contact',
    about : 'about'
}
let home = (req,res)=>{
    return res.render('web/layout/master',{
        content :homePage.home
    })
}
let blog = (req,res)=>{
    return res.render('web/layout/master',{
        content :homePage.blog
    })
}
let about = (req,res)=>{
    return res.render('web/layout/master',{
        content :homePage.about
    })
}
let contact = (req,res)=>{
    return res.render('web/layout/master',{
        content :homePage.contact
    })
}
module.exports = {
    home:home,
    blog : blog,
    contact : contact,
    about : about
}