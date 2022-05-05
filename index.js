let backheight = getComputedStyle(document.querySelector(".background")).height;
backheight = backheight.slice(0,-2)
console.log(backheight)
document.addEventListener("DOMContentLoaded", function() {
    
    const fps = setInterval(raise, 1000/60);
});

var raise = function() {
    backheight = backheight - 1.5;
    var num = backheight;
    document.querySelector(".background").style.height = `${num}px`; 
    if (backheight <= 1){
        document.querySelector(".background").style.display = 'none';
        clearInterval(fps);
    }
};