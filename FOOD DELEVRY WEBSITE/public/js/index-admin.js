const theme=document.querySelector(".mode")
const sidebar=document.querySelector('.sideitem')

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})