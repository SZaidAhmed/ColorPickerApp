function random(min , max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (+max - +min)) + +min; 
    
}
function randomRGB(){
    return `rgb(${random(0,256)},${random(0,256)},${random(0,256)})`;
}
var circles = document.querySelector(".circles");
for(var i =0 ; i< 6 ; i++){
    circles.insertAdjacentHTML("beforeend",`<div class="circleWrapper flex">
    <div style="background-color:${randomRGB()}" class="circle">

    </div>`
    );
}

var Allcircle =Array.from(document.querySelectorAll(".circle")) ;
ans = Allcircle[random(0,6)].style.backgroundColor;


var ansNode = document.querySelector(".header h1");
ansNode.textContent = ans;


var backgroud = document.querySelector(".container");
 
circles.addEventListener("click",function(e){
    if(Array.from(e.target.classList).includes("circle")){
        var ansPicked = e.target.style.backgroundColor;
        console.log(ansPicked)
        if(ansPicked === ans){
            backgroud.style.background = ans;
            Allcircle.forEach(function(circle){
                if(circle.style.backgroundColor === ans){
                }
                else{
                    circle.style.opacity=0;
                }
            })
            
        }
        else{
            e.target.style.opacity = 0;
        }
    }
});

var restBtn = document.querySelector(".reset");
restBtn.addEventListener('click',function(){
    circles.innerHTML="";
    for(var i =0 ; i< 6 ; i++){
        circles.insertAdjacentHTML("beforeend",`<div class="circleWrapper flex">
        <div style="background-color:${randomRGB()}" class="circle">
    
        </div>`
        );
    }
    
    var newAllcircle =Array.from(document.querySelectorAll(".circle")) ;
    ans = newAllcircle[random(0,6)].style.backgroundColor;    
    ansNode.textContent = ans;
    console.log(ans)
     
circles.addEventListener("click",function(e){
    if(Array.from(e.target.classList).includes("circle")){
        var ansPicked = e.target.style.backgroundColor;
        console.log(ansPicked)
        if(ansPicked === ans){
            backgroud.style.background = ans;
            newAllcircle.forEach(function(circle){
                if(circle.style.backgroundColor === ans){
                }
                else{
                    circle.style.opacity=0;
                }
            })
            
        }
        else{
            e.target.style.opacity = 0;
        }
    }
});

})