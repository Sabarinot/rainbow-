const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["#0d222d","#28408b","#40a7d0","#3bd2cf","#4ab7cb","#7abcca","#aaded3","white"]
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
})