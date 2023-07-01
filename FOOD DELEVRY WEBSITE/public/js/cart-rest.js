const theme=document.querySelector(".mode")
const sidebar=document.querySelector('.sideitem')
const foodname=document.getElementById("food_name");
const foodprice=document.getElementById("price");
const foood=document.getElementById("food");

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})






const createing=()=>{
    var item=document.createElement('div');
    item.classList.add('item');
    
  
    var lside=document.createElement('div');
    lside.classList.add('l-detail');
  
    var fodname=document.createElement('div');
    fodname.classList.add('food-name');
  
  
    var fodprice=document.createElement('div');
    fodprice.classList.add('price');
  
  
    var rside=document.createElement('div');
    fodprice.classList.add('r-detail');
  
    var pic=document.createElement('div');
    fodprice.classList.add('pic');
  
  
    lside.appendChild(fodname);
    lside.appendChild(fodprice);
    rside.appendChild(pic);
    item.appendChild(lside);
    item.appendChild(rside);
    foood.appendChild(item);
  }








const addbtn=(ass)=>{
    var add= document.getElementById(ass);
    var addd=add.innerHTML;
    if(addd==="add"){
        add.innerHTML= "added";
    add.classList.remove("addbttn");
    add.classList.add("added");
    const par=add.parentElement.parentElement.parentElement;
    // console.log(par.firstElementChild.firstElementChild.innerHTML);
    var itemName=par.firstElementChild.firstElementChild.innerHTML;
    var itemPrice=par.firstElementChild.lastElementChild.innerHTML;
    console.log(itemName);
    console.log(itemPrice);
    localStorage.setItem("itemName",itemName);
    localStorage.setItem("itemPrice",itemPrice);
    console.log(par.firstElementChild.lastElementChild.innerHTML);
    createing();
    }
}

jQuery(document).ready(($) => {
    $(".quantity").on("click", ".plus", function (e) {
      let $input = $(this).prev("input.qty");
      let val = parseInt($input.val());
      $input.val(val + 1).change();
    });
  
    $(".quantity").on("click", ".minus", function (e) {
      let $input = $(this).next("input.qty");
      var val = parseInt($input.val());
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });
  });



