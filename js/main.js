const writeForm = document.getElementById('calculate-form'),
      formaHass = document.getElementById('uncompleted-todos')  

const writing = (e) => {
    e.preventDefault()
    formaHass.after('after');

    let div = document.createElement('div');
    div.className = "todo-item";
    div.innerHTML = "<span><input type='checkbox'>Drink water</span>";
    formaHass.append(div);
}

writeForm.addEventListener('submit', writing)