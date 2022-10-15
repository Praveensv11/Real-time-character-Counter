const textareaE1 = document.getElementById("textarea")
const totalcounter = document.getElementById("total-counter")
const remainingcounter = document.getElementById("remaining-counter")

textareaE1.addEventListener("keyup", ()=>{
    updateCounter();
})

function updateCounter(){
     totalcounter.innerHTML=textareaE1.value.length;
     remainingcounter.innerHTML = textareaE1.getAttribute("maxlength")-textareaE1.value.length;
}