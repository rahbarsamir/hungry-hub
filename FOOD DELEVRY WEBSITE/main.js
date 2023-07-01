const express=require('express')
const mongoose=require('mongoose')
const hbs=require('hbs')
const route=require('./routes/route')
const model=require('./model/model')
const sfood=require('./model/foods')
const app=express();




app.use('',express.static('public'))
app.set('view engine','hbs')
app.set('views','views')
 



mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/food',()=>{
   console.log('connected to database')
})

// data insert
// const daata=async()=>{
//    const result=await sfood.insertMany([
//        {
//        foodName:'chicken biryani',
//        foodImg:'child-pages/img/biryani.jpg',
//        foodDesc:'best biryani',
//        price:150
//    },
//        {
//        foodName:'mutton biryani',
//        foodImg:'child-pages/img/mutton.jpg',
//        foodDesc:'mutton biryani',
//        price:250
//    },
//        {
//        foodName:'chicken biryani- half',
//        foodImg:'child-pages/img/biryani.jpg',
//        foodDesc:'best biryani',
//        price:90
//    },
//        {
//        foodName:'mutton biryani',
//        foodImg:'child-pages/img/mutton.jpg',
//        foodDesc:'best biryani',
//        price:150
//    },
//        {
//        foodName:'chili chicken',
//        foodImg:'child-pages/img/chilli.webp',
//        foodDesc:'chinese',
//        price:160
//    },
//        {
//        foodName:'lachha roll',
//        foodImg:'child-pages/img/laccha-roll.jpg',
//        foodDesc:'chinese',
//        price:40
//    },
//        {
//        foodName:'egg roll',
//        foodImg:'child-pages/img/egg-roll.webp',
//        foodDesc:'chinese',
//        price:30
//    },
//        {
//        foodName:'egg chicken roll',
//        foodImg:'child-pages/img/chicken-roll.jpg',
//        foodDesc:'chinese',
//        price:60
//    }
// ])}
// //    const daataa=await result.save()
// //    console.log(daataa)
// // }

// daata();








app.use('',route)
app.listen(1111,()=>{
   console.log('server start')
});

