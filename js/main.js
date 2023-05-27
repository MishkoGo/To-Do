const writeForm = document.getElementById('calculate-form'),
      formaHass = document.getElementById('uncompleted-todos'),
      formtextt = document.getElementById('todo-input')

const writing = (e) => {
    e.preventDefault()
    

    let div = document.createElement('div');
   
    div.className = "todo-item";
    div.innerHTML = `<span><input type='checkbox'>${formtextt.value}</span>`;
    formaHass.append(div);
}

writeForm.addEventListener('submit', writing)