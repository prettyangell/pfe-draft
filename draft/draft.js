const template = document.getElementById("informations");

let y=10;
let x=10;


function initippy(id){
   tippy(document.getElementById(id), {
      content: (reference)=>{
        const id =  reference.getAttribute('id')
        return template.innerHTML
      },
      trigger: "click",
      placement: "bottom",
      interactive: true,
    })
    
}  

function addrect(id,name){
  document.getElementById("area").innerHTML+=`<rect class="rect" id=${id} name=${name} 
  viewbox="0 0 5000 100"  y=${y} x=${x} width="50" height="50"> </rect>`;
  x=x+60;
}
function submit(){

}


function fetchPlacesFromDB() {
  fetch("/api/V2/place/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((place) => {
        const color = place.status ? "green" : "red";
        addrect(place._id,place.name);
        const rect = document.getElementById(place._id);
        rect.style.fill = color;
        if (rect.style.fill=="green") {
          document.getElementById(rect.id).classList.add("green");
        }
        console.log(rect.id)
      });
      data.forEach((place)=>{
        if (place.status==true) {
          initippy(place._id)
        }
        
      });
      

    
    })

    .catch((error) => console.log(`There is an error1: ${error}`));

    for (let id = 1; id<5; id++) {
      fetch(`/api/V2/place/p${id}`, { method: "get"})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(`There is an error2: ${error}`));
      
    }

}
function PostPlacesToDB(){
  
}

document.addEventListener("DOMContentLoaded", fetchPlacesFromDB, false);




