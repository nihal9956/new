
let map=document.getElementsByClassName('map_name')


for (let i = 0; i < map.length; i++) {
    map[i].addEventListener("click", function() {
       
        document.querySelector('._Active').classList.remove("_Active")
        map[i].classList.add("_Active")
     
    });
  }




let fee=document.getElementsByClassName('amount')

for (let i = 0; i < fee.length; i++) {
    fee[i].addEventListener("click", function() {
       
      const active= document.querySelector('.Active').classList.remove("Active")
      
        fee[i].classList.add("Active")
     
    });
  }