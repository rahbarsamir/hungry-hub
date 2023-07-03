
const theme=document.querySelector(".mode")
const sidebar=document.querySelector('.sideitem')
const form=document.getElementById('addform')
const menu=document.getElementById('menu')
const section=document.getElementById('section')
const orderform=document.getElementById('order-form')
const google=document.getElementById('google')

theme.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
     theme.querySelector('span:nth-child(1)').classList.toggle('active');
     theme.querySelector('span:nth-child(2)').classList.toggle('active');
})




var lat=0;
var lng=0;




const viewmaps=(la,ln)=>{
  console.log(la)
  console.log(ln)
  console.log("click")
  orderform.classList.add("blur")
  google.style.display="block"
  lat=la
  lng=ln

initMap(lat,lng)
  
}


const clos=()=>{
  orderform.classList.remove("blur")
  google.style.display="none"


    
}

const complete=(number)=>{

  console.log("hello")
  const data={
    number:number
  }
  fetch('/orders-admin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log('Data sent successfully=====>',response);
      window.location.href = "http://localhost:1111/orders-admin";
    })
    .catch(error => {
      console.error('Error sending data:', error);
      
    });

}











function initMap(x,y) {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.4033, lng: 87.5484 },
    zoom: 15,
  });

//   map.setTilt(45);

 
    previousMarker = new google.maps.Marker({
      position: { lat:x, lng:y },
      map: map
    });
  }


  


window.initMap = initMap;


let map;






// var latLng
// var lat=0;
// var lng=0;
// var previousMarker;
// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 23.4033, lng: 87.5484 },
//     zoom: 15,
//   });

// //   map.setTilt(45);

 
//     previousMarker = new google.maps.Marker({
//       position: { lat: 23.4033, lng: 87.5484 },
//       map: map
//     });
//   }



// window.initMap = initMap;


// let map;
