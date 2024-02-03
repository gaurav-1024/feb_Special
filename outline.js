function f1(e){
    let choice=document.getElementById("choice");
    console.log(choice.checked);
    if(choice.checked==true){
        let vol=document.getElementById("helo").value; 
        this.style.color=vol;
    }
    else{let vol=document.getElementById("helo").value; 
    this.style.backgroundColor=vol;}
}

let nav1=document.getElementById('nav');
let sidebar=document.getElementById("sidebar");
let main=document.getElementById("main");
let main_text=document.getElementById("main_text");
let side_btn1=document.getElementById("side_btn1");
let side_btn2=document.getElementById("side_btn2");
let side_btn3=document.getElementById("side_btn3");
let side_btn4=document.getElementById("side_btn4");
let side_btn5=document.getElementById("side_btn5");
let side_btn6=document.getElementById("side_btn6");
let side_btn7=document.getElementById("side_btn7");


nav1.addEventListener("click",f1);
sidebar.addEventListener("click",f1);
main.addEventListener("click",f1);
main_text.addEventListener("click",f1);
side_btn1.addEventListener("click",f1);
side_btn2.addEventListener("click",f1);
side_btn3.addEventListener("click",f1);
side_btn4.addEventListener("click",f1);
side_btn5.addEventListener("click",f1);
side_btn6.addEventListener("click",f1);
side_btn7.addEventListener("click",f1);
