let items = [
    {
        done: false,
        text: 'go to gym',
        id: 1,
    },
]
const grocerryInputEl = document.getElementById('grocery-input');
const groceryListEl = document.getElementById('grocery-list');

function addItem(item){
    items.push(item);
    // renderList();
}

function deleteItem(itemId){
    // console.log(itemId);
    const newItems = items.filter(function(item){
        return item.id !== itemId;
    })
    
    items = newItems;
    // renderList();
}

function checkItem(itemId){
    const checkIndex = items.findIndex(function(item){
        return item.id === itemId;
    })

    items[checkIndex].done = !items[checkIndex].done;
}

function renderList(){
    // li.innerHTML = ''
    for(let i = 0 ; i<items.length ; i++){
    const li = document.createElement('li');
    li.innerHTML = `
    <label for = "${items[i].id}" >
        <input type = "checkbox" id = "${items[i].id}"/>
        ${items[i].text} 
    </label> 
    <button class="btn" data-itemId = "${items[i].id}"> delete </button>
    `;
    groceryListEl.appendChild(li);
    }
}

function clickHandler(event){
    if(event.target.className === 'btn'){
        const itemToBeDeleted =  Number(event.target.dataset.itemid);
        deleteItem(itemToBeDeleted);
    }
}

function initialize(){
    document.addEventListener('click', clickHandler);
    renderList();
}

initialize();
