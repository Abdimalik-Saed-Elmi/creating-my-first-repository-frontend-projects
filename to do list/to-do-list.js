let Inbutbox = document.getElementById('inbutbox');
let Listcontainer = document.getElementsByClassName('List-container');


function Addtask(){
    if(Inbutbox.value === '') {
        console.log('Something went wrong..!')
    }
    else{
        let lis = document.createElement("li")
        lis.innerHTML = Inbutbox.value
        Listcontainer.appendChild(li);
    }
}