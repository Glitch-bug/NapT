var reveal = () => {
  let section = ["about-us", "services"]
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
}


var divWindow = document.querySelector("#glass-ping");



var x_ch = 2;
var y_ch = 2;

var background_height = window.getComputedStyle(document.querySelector('.home-backk')).height.slice(0,-2);
var background_width = window.getComputedStyle(document.querySelector('.home-backk')).width.slice(0,-2);
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

var space = document.querySelector('#contact-us');
var space_width = parseInt(window.getComputedStyle(space).width.slice(0,-2));
console.log(space_width);
var space_height  = parseInt(window.getComputedStyle(space).height.slice(0,-2));
var Mover = function(ide) {
  this.ide = ide;
  this.top = 0;
  this.left = 0;
  this.right = 0;
  this.bottom = 0;
  this.x_dir = 'left';
  this.y_dir = 'up';
  this.x_ch = Math.floor(Math.random()*(4-1)+1);
  this.y_ch = Math.floor(Math.random()*(4-1) +1);
}

Mover.prototype.update = function() {
  this.top = parseInt(window.getComputedStyle(this.ide).top.slice(0,-2));
  this.left = parseInt(window.getComputedStyle(this.ide).left.slice(0,-2));
  this.right = parseInt(window.getComputedStyle(this.ide).right.slice(0,-2));
  this.bottom = parseInt(window.getComputedStyle(this.ide).bottom.slice(0,-2));
  this.height = parseInt(window.getComputedStyle(this.ide).height.slice(0,-2));
  this.width = parseInt(window.getComputedStyle(this.ide).width.slice(0,-2));
}

Mover.prototype.move = function(){
  if (this.top <= 0) {
    this.y_dir = 'down';
  }else if (this.top + this.height >= space_height) {
    this.y_dir = 'up';
  }

  if (this.left <=0) {
    this.x_dir = 'right';
  }else if (this.left+this.width >= space_width){
    this.x_dir = 'left';
  }

  //Vertical movement
  if (this.y_dir === 'up'){
    this.ide.style.top = this.top-this.y_ch +'px'
  }else if (this.y_dir === 'down'){
    this.ide.style.top = this.top+this.y_ch+'px'
  }
  
  //Horizontal movement
  if (this.x_dir === 'left'){
    this.ide.style.left = this.left-this.x_ch +'px';
  }else if (this.x_dir === 'right'){
    this.ide.style.left = this.left+this.x_ch+'px';
  }
}
var ping_movers = [];

var ping_pongs = document.querySelectorAll(".ping-pongs");
for(let i = 0; i< ping_pongs.length; i++){
  var mover = new Mover(ping_pongs[i]);
  mover.update();
  ping_movers.push(mover);
}

var ping_pongs = function(){
  // var ping_pongs = document.querySelectorAll(".ping-pongs");
  // var space = document.querySelector('#contact-us');
  // var space_width = getComputedStyle(space).width.slice(0,-2);
  // var space_heigth  = getComputedStyle(space).height.slice(0,-2);
  for(let i = 0; i< ping_movers.length; i++){

    let pong = ping_movers[i];
    
    // let pong_top = getComputedStyle(pong).top.slice(0,-2);
    // let pong_left = getComputedStyle(pong).left.slice(0,-2);
    // let pong_right = getComputedStyle(pong).right.slice(0,-2);
    // let pong_bottom = getComputedStyle(pong).bottom.slice(0,-2);
    pong.update();
    pong.move();
    // console.log(pong.top)
    //decides which way the pong should move
    //moves the pong in that direction
  

  }
}

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
  
  ping_pongs();

};

