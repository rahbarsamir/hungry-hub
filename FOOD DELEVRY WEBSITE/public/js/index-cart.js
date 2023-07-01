const theme = document.querySelector(".mode")
const sidebar = document.querySelector('.sideitem')
const foodname = document.getElementById("food_name");
const foodprice = document.getElementById("price");
const foood = document.getElementById("food");
const item = document.getElementById("itm");
var total = document.getElementById("total");
var etotal = document.getElementById("amount")
var container = document.getElementById("container")
const main = document.getElementById("main")
const google = document.getElementById("google")
const section=document.getElementById("section")
var tb = 1;

const tot=total.innerHTML;
if(tot==0){
  console.log("iffffffff")
  section.classList.add("dis-block")
}

theme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  theme.querySelector('span:nth-child(1)').classList.toggle('active');
  theme.querySelector('span:nth-child(2)').classList.toggle('active');
})

jQuery(document).ready(($) => {
  $(".quantity").on("click", ".plus", function (e) {
    let $input = $(this).prev("input.qty");
    let val = parseInt($input.val());
    $input.val(val + 1).change();
  });

  $(".quantity").on("click", ".minus", function (e) {
    let $input = $(this).next("input.qty");
    var val = parseInt($input.val());
    if (val > 1) {
      $input.val(val - 1).change();

    }
  });
});






var totalamount = parseInt(total.innerHTML)
const plus = (price, name) => {
  totalamount = totalamount + price;
  // console.log(totalamount)
  total.innerHTML = totalamount;
  etotal.innerHTML = totalamount + 50;
  console.log(name.innerHTML)
  const data = {
    name: name.innerHTML
  }

  fetch('/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log('Data sent successfully');
    })
    .catch(error => {
      console.error('Error sending data:', error);
    });

}


const minus = (price, id, name) => {
  if (id.value > 1) {
    totalamount = totalamount - price;
    // console.log(totalamount)
    total.innerHTML = totalamount;
    etotal.innerHTML = totalamount + 50;

    const data = {
      name: name.innerHTML
    }
    fetch('/minus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log('Data sent successfully');
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });

  }
}

var latLng
var lat=0;
var lng=0;
var previousMarker;
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.4033, lng: 87.5484 },
    zoom: 15,
  });

  map.setTilt(45);

  map.addListener('click', function (e) {
    // if the previousMarker exists, remove it
    if (previousMarker)
      previousMarker.setMap(null);

    latLng = e.latLng;
    lat=e.latLng.lat();
    lng=e.latLng.lng();
    console.log(e.latLng.lat());
    console.log(e.latLng.lng());

    //image = clientURL + "/common/images/markers/red.png";
    console.log("Marker");
    previousMarker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }

  );

}

window.initMap = initMap;



const submit = () => {
  //container overflow
  const t=total.innerHTML
  if(t!=0){
  container.style.overflow = "hidden";
  //main display none
  main.classList.add("dis-block")
  //google display
  google.classList.remove("dis-block")
  google.style.bottom = "0px"
  }
  else{
    alert("Oops! Your Cart Is Empty")
  }
}


const order = () => {
  console.log(etotal.innerHTML)
  console.log(lat)
  console.log(lng)
  if(lat!=0 || lng!=0){
  const data = {
    total:etotal.innerHTML,
    lat:lat,
    lng:lng
    
  }
  fetch('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log('Data sent successfully');
    })
    .catch(error => {
      console.error('Error sending data:', error);
      
    });
    window.location.href = "http://localhost:1111/order";
    localStorage.removeItem("targetTime");
  }
  else{
    alert("PLEACE ADD YOUR LOCATION:-")

  }

}
const d = "hello its come from front end"
baseurl = 'http://localhost/cart'
























