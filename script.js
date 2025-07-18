let Button = document.querySelector(".darkmode");
let Mode = document.querySelector("body");
let Text1 = document.querySelector("h2");
let Text2 = document.querySelector("h3");
let nav = document.querySelector(".navbar");
let value = 0;
Button.addEventListener("click",function(){
    if(value == 0){

        Mode.style.background = "linear-gradient(to right, #ffe0c3, #ffffff)";
        Button.style.color="teal";
        Text1.style.color = "teal";
        Text2.style.color = "teal";
        nav.style.color="teal";
        nav.style.textShadow ="none";
        value = 1;
    }
    else{
        Mode.style.background = "linear-gradient(to right , black,indigo 35%, black)";
        Button.style.color="white";
        Text1.style.color="white";
        Text2.style.color="white";
        nav.style.color= "white";
        value = 0;   
    }
})