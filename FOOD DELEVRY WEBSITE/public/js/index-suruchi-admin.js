const theme=document.querySelector(".mode")
const sidebar=document.querySelector('.sideitem')
const form=document.getElementById('addform')
const menu=document.getElementById('menu')
const section=document.getElementById('section')

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})


const addfood=()=>{
    // menu.classList.add('hidden-display')
    menu.style.display="none";
    form.style.top='0px'
    form.classList.remove('hidden-display');
    // form.style.display='';

    

}