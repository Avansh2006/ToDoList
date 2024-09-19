let input = document.getElementById('todoInput') ;
let ul = document.querySelector('ul');
document.getElementById('addButton').addEventListener('click',()=>{
   let li = document.createElement('li');
   li.innerText = input.value ;
   if(input.value == ''){
       alert("Please Enter a Task!!")
    }
    else{
        ul.appendChild(li);
        input.value ='' ;
    }
   

})