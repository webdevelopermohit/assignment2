let inputBox=document.getElementById("inputbox")
let output=document.getElementById("print")
function convert(){
    let string=inputBox.value;
    let reverse=string.split("").reverse().join("");
    output.innerText=`"${reverse}"`;
    inputBox.value="";
    setTimeout(function(){
        output.innerText=""
    },4000)
   }


inputBox.addEventListener("keyup",reverseSting)
function reverseSting(e){
    if(e.key=="Enter"){
setTimeout(convert(),2000);
}
}