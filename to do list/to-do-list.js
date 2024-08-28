let Inbutbox = document.getElementById('inbutbox');
let Listcontainer = document.getElementsByClassName('List-container');


function Addtask(){
    if(Inbutbox.value === '') {
        console.log('Something went wrong..!')
    }
    else{

        let li = document.createElement('li')
        li.innerHTML = Inbutbox.value;
        Listcontainer.appendChild(li);
        
    }
}