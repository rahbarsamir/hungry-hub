const express = require('express')
const model = require('../model/model')
const sfood = require('../model/foods')
const cakebake = require('../model/cakebake')
const momo = require('../model/momo')



const register = require('../model/register')
const admins = require('../model/admins')
const route = express.Router();
const sam = ['apple', 'mango', 'banana'];
const popup = require('node-popup');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const auth = require("../middleware/auth")
const auth2 = require('../middleware/auth2')



route.use(cookieParser())
route.use(express.json());
route.use(express.urlencoded({ extended: false }))



route.get('/', auth, async (req, resp) => {
    const detail = await model.findOne({ '_id': '63e9fcd82c5261c595e46086' })
    const token = await req.cookies.jwt
    const name = { myname: req.username.fName }


    resp.render('home', {
        detail: detail,
        name: name
    })
})











route.get('/suruchi', auth, async (req, resp) => {
    const biryani = await sfood.find({})
    let name = await sfood.find({ restName: "suruchi biryani" })
    const Uname = { myname: req.username.fName }
    resp.render("first", {
        biryani: biryani,
        sam: sam,
        Uname: Uname
    })
})
route.post('/suruchi', auth, async (req, res) => {
    let name = req.body.name;
    // console.log(`name is ${name}`)
    try {
        const foodDetail = await sfood.findOne({ foodName: name });
        // console.log(foodDetail)
        const userdetail = req.username
        const id = req.id;

        const foodname = foodDetail.foodName;
        // console.log(foodname)
        const price = foodDetail.price;
        const img = foodDetail.foodImg;



        const check = userdetail.cart



        // console.log(check)
        const added = await register.updateOne({ _id: id }, {
            $addToSet: { cart: foodDetail }
        })
        console.log(added)
        console.log("added")
    } catch (error) {
        console.log(error)
    }


})











route.get('/cakebake', auth, async (req, resp) => {
    const cake = await cakebake.find({})
    // let name = await sfood.find({ restName: "suruchi biryani" })
    const Uname = { myname: req.username.fName }
    resp.render("cakebake", {
        cake: cake,
        sam: sam,
        Uname: Uname
    })
})

route.post('/cakebake', auth, async (req, res) => {
    let name = req.body.name;
    // console.log(`name is ${name}`)
    try {
        const foodDetail = await cakebake.findOne({ foodName: name });
        // console.log(foodDetail)
        const userdetail = req.username
        const id = req.id;

        const foodname = foodDetail.foodName;
        // console.log(foodname)
        const price = foodDetail.price;
        const img = foodDetail.foodImg;



        const check = userdetail.cart



        // console.log(check)
        const added = await register.updateOne({ _id: id }, {
            $addToSet: { cart: foodDetail }
        })
        console.log(added)
        console.log("added")
    } catch (error) {
        console.log(error)
    }


})




route.get('/momo', auth, async (req, resp) => {
    const mom = await momo.find({})
    // let name = await sfood.find({ restName: "suruchi biryani" })
    const Uname = { myname: req.username.fName }
    resp.render("momo", {
        momo: mom,
        sam: sam,
        Uname: Uname
    })
})

route.post('/momo', auth, async (req, res) => {
    let name = req.body.name;
    // console.log(`name is ${name}`)
    try {
        const foodDetail = await momo.findOne({ foodName: name });
        // console.log(foodDetail)
        const userdetail = req.username
        const id = req.id;

        const foodname = foodDetail.foodName;
        // console.log(foodname)
        const price = foodDetail.price;
        const img = foodDetail.foodImg;



        const check = userdetail.cart



        // console.log(check)
        const added = await register.updateOne({ _id: id }, {
            $addToSet: { cart: foodDetail }
        })
        console.log(added)
        console.log("added")
    } catch (error) {
        console.log(error)
    }


})













route.get('/cart', auth, async (req, resp) => {

    var totalprice = 0;
    const Uname = { myname: req.username.fName };
    const cartdetail = req.username.cart
    // console.log(cartdetail)
    cartdetail.forEach(element => {

        var int = element.price
        var q = element.qty
        totalprice = (int * q) + totalprice;


    });
    var etotal = totalprice + 50;



    resp.render('cart', {
        Uname: Uname,
        cartdetail: cartdetail,
        totalprice: totalprice,
        etotal: etotal

    })



})

route.post('/add', auth, async (req, res) => {
    const aname = req.body.name;
    const id = req.id;

    console.log(`nameis${aname}`)
    try {

        const result = await register.updateOne({ _id: id, "cart.foodName": aname },
            {
                $inc: {
                    "cart.$.qty": 1
                }
            }

        )
        // console.log(result)
        // console.log("qty update")
    } catch (error) {
        console.log("not update")
        console.log(error)

    }
})





route.post('/minus', auth, async (req, res) => {
    const aname = req.body.name;
    const id = req.id;

    console.log(aname)
    try {
        const result = await register.updateOne({ _id: id, "cart.foodName": aname },
            {
                $inc: {
                    "cart.$.qty": -1
                }
            }

        )
        // console.log(result)
        // console.log("qty update")
    } catch (error) {
        console.log("not update")
        console.log(error)

    }
})

// route.post('/cart',async(req,res)=>{
//    const rd=req.body.name
//    console.log(`data is ${rd}`)



// })

route.post('/cart', auth, async (req, res) => {
    const total = req.body.total;
    const lat = req.body.lat
    const lng = req.body.lng
    console.log(typeof(total))
    console.log(lat)
    console.log(lng)
    const user = req.username
    const cart = user.cart
    const id = req.id
    console.log(typeof(id))
    try {
        const add = await register.updateOne({ _id: id },{
            $push:{order:cart}
        })

        const totaladd= await register.updateOne({_id:id},{
            $inc:{total:total}

        })
        console.log(add)
        

    } catch (error) {
        console.log("err")

    }


    try {
        const remove = await register.updateOne({ _id: id },{
            $unset:{cart:cart}
        })
        console.log(add)
        

    } catch (error) {
        console.log("not remove")

    }


})




route.get("/order",auth, async(req, res) => {
    const Uname = { myname: req.username.fName };
    const id=req.id
    const user=await register.findOne({_id:id});
    const order=user.order;
    const total=user.total;
    // console.log(user)
    console.log(order)
    res.render('order',{
        order:order,
        total:total,
        Uname:Uname
    })


})

route.post("/cancel",auth,async(req,res)=>{
    const id=req.id;
    
    const user=req.username;
    const order = user.order;
   try {
    const can=await register.updateOne({_id:id},{
        $unset:{order:order}
    })
    console.log(can)
   } catch (error) {
    console.log(error)
    
   }
   try {
    const cantol=await register.updateOne({_id:id},{
        $set:{total:0}

    })
    console.log(cantol)
   } catch (error) {
    console.log(error)
    
   }
})




route.get("/login", async (req, res) => {
    res.render("login", {

    })
});















route.post("/register", async (req, res) => {
    // console.log(req.body)

    try {
        const pass = req.body.password;
        const cpass = req.body.comfirmPassword;
        if (pass === cpass) {
            const regis = new register({
                fName: req.body.fName,
                lName: req.body.lName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                password: req.body.password,
                comfirmPassword: req.body.comfirmPassword,
            })
            const token = await regis.generate();
            console.log(token)
            res.cookie("jwt", token);

            await regis.save();

        
            res.redirect("/")


        } else {

            res.send("password not match")


        }


    }
    catch (err) {
        res.status(400).send(err)

    }
  



})














route.post("/login", async (req, res) => {
    // console.log(req.body)
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    try {
        const user = await register.findOne({ phoneNumber: phoneNumber });
        if (user.password === password) {
            const token = await user.generate()
            // console.log(token)
            res.cookie("jwt", token)
            
            res.redirect("/")



        }
        else {
            const msg = { err: "Password Not Match Please Try Again" }
            res.render("login", {
                msg: msg

            })
            // res.send("password wrong")
        }

    } catch (error) {
        // res.status(400).send(error)
        res.status(400)
        const err = { err: "Phone Number Or Password Wrong" }
        res.render("login", {
            msg: err
        });

    }





})

route.post('/admin',async(req,res)=>{
   
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await admins.findOne({ username: username});
        if (user.password === password) {
            const token = await user.generate()
            console.log(token)
            res.cookie("adminToken", token)
            
            res.redirect("/admin")



        }
        else {
            const msg = { err: "Password Not Match Please Try Again" }
            res.render("login", {
                msg: msg

            })
            // res.send("password wrong")
        }

    } catch (error) {
        // res.status(400).send(error)
        res.status(400)
        const err = { err: "Phone Number Or Password Wrong" }
        res.render("login", {
            msg: err
        });

    }

    


})

route.get('/admin',async(req,res)=>{

    const detail = await model.findOne({ '_id': '63e9fcd82c5261c595e46086' })
    // const token = await req.cookies.adminToken;
    // const name = { myname: req.username.fName }
    res.render('admin',{
        detail:detail

    })
})





route.get('/suruchi-admin',async(req,res)=>{
    const biryani = await sfood.find({})
    res.render('suruchi-admin',{
        biryani:biryani

    })

})

route.post('/suruchi-admin',async(req,res)=>{
  const name=  req.body.foodName
  const img=  req.body.foodImg
  const desc= req.body.foodDesc
  const pri= req.body.price
  console.log(name)
  console.log(img)
  console.log(desc)
  console.log(pri)
  const random=randon_string();
  console.log(random)
  
  try {
    const insert= new sfood({
        foodName:name,
        foodImg:img,
        foodDesc:desc,
        price:pri,
        classname:random
    
    
      })
      await insert.save();
      console.log("added")
      res.redirect("/suruchi-admin")
      console.log(insert)
  } catch (error) {
        console.log(error)
  }

})




route.get('/cakebake-admin',async(req,res)=>{
    const cake = await cakebake.find({})
    res.render('cakebake-admin',{
        cake:cake

    })

})

route.post('/cakebake-admin',async(req,res)=>{
  const name=  req.body.foodName
  const img=  req.body.foodImg
  const desc= req.body.foodDesc
  const pri= req.body.price
  console.log(name)
  console.log(img)
  console.log(desc)
  console.log(pri)
  const random=randon_string();
  console.log(random)
  
  try {
    const insert= new cakebake({
        foodName:name,
        foodImg:img,
        foodDesc:desc,
        price:pri,
        classname:random
    
    
      })
      await insert.save();
      console.log("added")
      res.redirect("/cakebake-admin")
      console.log(insert)
  } catch (error) {
        console.log(error)
  }

})



route.get('/momo-admin',async(req,res)=>{
    const mom = await momo.find({})
    res.render('momo-admin',{
        momo:mom

    })

})

route.post('/momo-admin',async(req,res)=>{
  const name=  req.body.foodName
  const img=  req.body.foodImg
  const desc= req.body.foodDesc
  const pri= req.body.price
  console.log(name)
  console.log(img)
  console.log(desc)
  console.log(pri)
  const random=randon_string();
  console.log(random)
  
  try {
    const insert= new momo({
        foodName:name,
        foodImg:img,
        foodDesc:desc,
        price:pri,
        classname:random
    
    
      })
      await insert.save();
      console.log("added")
      res.redirect("/momo-admin")
      console.log(insert)
  } catch (error) {
        console.log(error)
  }

})

























function randon_string(){
    var string='';
    var char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for(var i, i=0;i<15;i++){
        string += char.charAt(Math.floor(Math.random()*char.length))
        
    }
    return string;
}










































const kjkj = async () => {
    let name = await sfood.find({ restName: "suruchi biryani" }).exec()
    console.log(name.restName)
}
kjkj()


module.exports = route;