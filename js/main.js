const writeForm = document.getElementById('calculate-form'),
      removeForm = document.getElementById('demo'),   
      formaHass = document.getElementById('uncompleted-todos'),
      formtextt = document.getElementById('todo-input');

const writing = (e) => {
    e.preventDefault()

    let div = document.createElement('div');
    div.className = "todo-item";
    div.innerHTML = `
                    <span><input type='checkbox'>${formtextt.value}</span>
                    <a href="#" class="a-item"  onclick="func()">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </a>
                    `;
                    
    formaHass.append(div);
    formtextt.value = "";
}

function func(){
    let div = document.querySelector('.todo-item');
    div.remove();
}

writeForm.addEventListener('submit', writing)