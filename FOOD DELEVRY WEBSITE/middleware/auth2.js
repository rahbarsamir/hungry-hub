const jwt= require("jsonwebtoken")
const admin= require("../model/admins");


const auth2= async(req,res,next)=>{
    try {
        const token=req.cookies.adminToken;
        const user=adminToken.verify(token,"hellomynameisrahbarsamirandiamadevdevloper");
        // console.log(user);
        
        const username=await admin.findOne({_id:user._id});
        req.username=username;
        req.id=user._id
        // console.log(username.name);
        next()
        res.redirect("/admin")
        
    } catch (error) {
        // res.render("login")
        res.redirect("/login")
        
    }
    

}

module.exports=auth2;