let reveal = () => {
  let section = document.getElementsByTagName("section");
  let wrp = document.querySelectorAll(".sect-wrapper");

  let nalink = document.querySelectorAll(".nav-item");
  let naan = document.querySelectorAll(".nav-item > a");

  for(let i = 0; i < section.length; i++){
    let windowHeight = window.innerHeight;
    let sectop = section[i].getBoundingClientRect().top;
    let revealpoint = 300;
  
    if(sectop < windowHeight - revealpoint){
        wrp[i].classList.add("active");
      }
        else{
        wrp[i].classList.remove("active");
      }
  }

//   for(let i = 0; i < nalink.length; i++){
//     let windowHeight = window.innerHeight;
//     let sectop = section[i].getBoundingClientRect().top;

//     if(sectop < windowHeight - 100){
//         nalink[i].classList.add("scroll");
//     }
//   }
}

// ping pong window
// fps = setInterval();

var divWindow = document.querySelector("#glass-ping");
divWindow.style.top = -300;
window.addEventListener('scroll', reveal);