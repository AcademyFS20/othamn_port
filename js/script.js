var txt = document.querySelector('.txt-animation');
console.log(txt);
var Typewriter = new Typewriter(txt, {
  loop: false,
  delay: 45,
});

Typewriter
  .pauseFor(300)
  .typeString('I am Otmane KSAANI')
  .pauseFor(1000)
  .typeString(' I am a web developper full stack')
  .pauseFor(1000)
  .deleteChars(33)
  .pauseFor(1000)
  .typeString(' I am a web developper front end')
  .pauseFor(1000)
  .deleteChars(32)
  .pauseFor(1000)
  .typeString(' I am a web developper back end')
  .pauseFor(1000)
  .deleteChars(31)
  .start();
  
let burger=document.querySelector(".burger");
let nav=document.querySelector(".nav-gauche");
burger.addEventListener("click",function(){
    nav.classList.toggle("nav-gauche-in");
    nav.classList.toggle("nav-gauche-out");
});
for(i=0;i<5;i++)
{
let lien=[];
lien[i]=document.querySelectorAll(".nav-menu-item a")[i];
//console.log(lien);
lien[i].addEventListener("click",function(){
nav.classList.add("nav-gauche-out");
});
}





































/*const str1=" a Developper web Full Stack";
const str2=" a Developper Back End";
const str3=" a Developper Front End";
function extractChar(str,index)
{
    return str.slice(index,index+1);
}
let  span=document.querySelector("#span");
var str="";
span.style.color='red';
for(let i=0;i<str1.length;i++)
{
    setTimeout(function(){str+=extractChar(str1,i);
        span.innerHTML=str;},200*i);
}
setTimeout(function(){span.innerHTML="";
    span.style.color='green';},
    str1.length*200);
let stri="";
for(let i=0;i<str2.length;i++)
{
    setTimeout(function(){stri+=extractChar(str2,i);
        span.innerHTML=stri;},200*(i+str1.length));
}
setTimeout(function(){span.innerHTML="";
    span.style.color='black';},
    (str1.length+str2.length)*200);
let strii="";
for(let i=0;i<str3.length;i++)
{
    setTimeout(function(){strii+=extractChar(str3,i);
        span.innerHTML=strii;},200*(i+str1.length+str2.length));
}*/






