const theme=document.querySelector(".mode")
const btn=document.getElementById("btnbox");
const l=document.getElementById("login");
const r=document.getElementById("register");
const err=document.getElementById("err")
const ad=document.getElementById("admin")
const adbtn=document.getElementById("ad-btn")


// const qy=document.getElementById("qy")
var tb=0;
// var qty=parseInt(qy.value);

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})




console.log(btn.firstElementChild)
const login=()=>{
  l.style.left="0px";
  l.style.top="0px";
 r.style.left="400px"
 ad.style.top= "10rem";
 btn.firstElementChild.classList.add("active-btn")
 btn.lastElementChild.classList.remove("active-btn")
 adbtn.classList.remove("active")
}
const register=()=>{
  r.style.left="0px";
  l.style.left="-400px"
  ad.style.top= "10rem";
  btn.lastElementChild.classList.add("active-btn")
  btn.firstElementChild.classList.remove("active-btn")
  adbtn.classList.remove("active")
  err.style.display="none"
}
const admin=()=>{
  ad.style.top="-16rem"
  l.style.top="-30rem"
  r.style.left="400px"
  adbtn.classList.add("active")
  btn.lastElementChild.classList.remove("active-btn")
  btn.firstElementChild.classList.remove("active-btn")
}















