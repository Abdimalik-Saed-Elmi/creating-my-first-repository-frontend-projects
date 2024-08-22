const notesContainer = document.querySelector(".noteContainer");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inbut-box");

function Shownotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
Shownotes();

function Storage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createbtn.addEventListener("click", ()=>{
    const inputbox = document.createElement("p")
    const img = document.createElement("img")
    inputbox.className = "inbut-box"
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);

})

notesContainer.addEventListener("click", (e)=>{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();  
        Storage(); 
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inbut-box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                Storage();
            }
        })
    }

})

document.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
        
    }
})