let items = [
    {
        done: false,
        text: 'milk',
        id: 1,
    },
]
const groceryInputEl = document.getElementById('grocery-input')
const groceryListEl = document.getElementById('grocery-list');

function addItem(item){
    items.push(item);
    renderList();
}

function deleteItem(itemId){
    const newItems = items.filter(function(item){
        return item.id !== itemId
    });
    items = newItems;
    renderList();
}

function checkItem(itemId){
    const checkIndex = items.findIndex(function(item){
        return itemId === item.id;
    })

    items[checkIndex].done = !items[checkIndex].done
}

function renderList(){
    groceryListEl.innerHTML = '';
    for(let i = 0 ; i < items.length ; i++){
        const li = document.createElement('li');
        li.innerHTML = `
        <label for="${items[i].id}" >
            <input id="${items[i].id}" type="checkbox"/>
                ${items[i].text} 
        <button class="delete" data-deleteId = "${items[i].id}">
            delete 
        </button>
        `;
        groceryListEl.appendChild(li);
    }
}

function handleClick(event){
    if(event.target.className === 'delete'){
        const itemToBeDeleted = Number(event.target.dataset.deleteid);
        deleteItem(itemToBeDeleted)
    }

}

function initialize(){
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', function(e){
            const text = groceryInputEl.value;
            if(e.key === 'Enter'){
            const item = {
                done: false,
                text: text,
                id: Date.now(),
            }
            addItem(item)
        }
    })
    renderList();
}


initialize();

//TODO normal function to arrow functions