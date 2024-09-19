let input = document.getElementById('todoInput');
let ul = document.querySelector('ul');
alert("you can also press ENTER key to add a Task !!")

document.getElementById('addButton').addEventListener('click', () => {
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    li.innerText = input.value;
    if (input.value == '') {
        alert("Please Enter a Task!!")
    }
    else {
        ul.appendChild(li);
        li.append(delBtn)
        delBtn.addEventListener('click', ()=>{
            delBtn.parentElement.remove();
        })
        input.value = '';
    }


})
document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        let li = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    li.innerText = input.value;
        if (input.value == '') {
            alert("Please Enter a Task!!")
        }
        else {
            ul.appendChild(li);
        li.append(delBtn)
        delBtn.addEventListener('click', ()=>{
            delBtn.parentElement.remove();
        })
        input.value = '';
        }
    }
    
})