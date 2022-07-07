var reveal = () => {
  let section = ["about-us", "services", "testimonies"]
  let nalink = document.querySelectorAll(".nav-item");
  let naan = document.querySelectorAll(".nav-item > a");
  let all_sections = document.getElementsByTagName("section");

  for(let i = 0; i < section.length; i++){
    let windowHeight = window.innerHeight;
    let sectop = document.querySelector(`#${section[i]}`).getBoundingClientRect().top;
    let revealpoint = 300;
    let show = false;
    let wrp = document.querySelector(`#${section[i]} .sect-wrapper`);
    //You made a mistake booooo!!! 
    // Obtain id of sectop then make active sect-wrapper within that sectop
    if (wrp){
      if((sectop < windowHeight - revealpoint)){
        wrp.classList.add("active");
      }else{
        wrp.classList.remove("active");
      }
    }
  }

  for(let i = 0; i < nalink.length; i++){
    let windowHeight = window.innerHeight;
    let sectop = all_sections[i].getBoundingClientRect().top;

    if(sectop < windowHeight - 100){
        nalink[i].classList.add("scroll");
    }
  }
  console.log("Just keep scrolling");
}


var divWindow = document.querySelector("#glass-ping");


document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', reveal);
  const fps = setInterval(ping_pong, 1000/60);
  var images = document.querySelectorAll(".service")

  for (let i =0; i< images.length; i++){
    var indefication = "";
    var class_list = images[i].classList;
    for(let j =0; j < class_list.length; j++){
      indefication += "."+class_list[j];
    }
    var width = getComputedStyle(document.querySelector(`${indefication}`)).width;
    document.querySelector(`${indefication} > .textish`).style.width = width;
  }
});
var x_ch = 2;
var y_ch = 2;

var background_height = window.getComputedStyle(document.querySelector('.home-backk')).height.slice(0,-2);
var background_width = window.getComputedStyle(document.querySelector('.home-backk')).width.slice(0,-2);
var ping_pong = function() {

  //Glass vertical motion animation
  var glass_height = 300;
  var glass_width = 500;
  let t_num = parseInt(window.getComputedStyle(document.querySelector('#glass-ping')).top.slice(0,-2));
  if(t_num <= 0){
    y_ch = 2;
  }
  else if(t_num >= parseInt(background_height)-glass_height){
    y_ch = -2;
  }
  t_num += y_ch;
  document.querySelector('#glass-ping').style.top = t_num+"px";
  
  //Glass horizontal motion animation
  let l_num = parseInt(window.getComputedStyle(document.querySelector('#glass-ping')).left.slice(0,-2));
  if(l_num <= 0){
    x_ch = 2;
  }
  else if(l_num >= parseInt(background_width)-glass_width){
    x_ch = -2;
  }
  l_num += x_ch;
  document.querySelector('#glass-ping').style.left = l_num+"px";
};