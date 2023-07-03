const theme=document.querySelector(".mode")
const sidebar=document.querySelector('.sideitem')

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})

var myarray=[];


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
    // var itemPrice=par.firstElementChild.lastElementChild.lastElementChild.innerHTML;


    console.log(itemName);
    // console.log(itemPrice);
    // localStorage.setItem("itemName",itemName);
    // localStorage.setItem("itemPrice",itemPrice);
    // console.log(par.firstElementChild.lastElementChild.innerHTML);
    // var obj={name:itemName,price:itemPrice,id:ass};
    // myarray.push(obj);
    // localStorage.setItem("obj",JSON.stringify(myarray));

    


    const data = {
        name:itemName
      };
      
      fetch('/onebite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        console.log('Data sent successfully');
        response.status(200)
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
    }
}
