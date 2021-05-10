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
}

function deleteItem(itemId){
    const newItems = items.filter(function(item){
        return item.id !== itemId
    });
    items = newItems;
}

function checkItem(){

}

function renderList(){

}

function initialize(){
    renderList();
}

initialize();

//TODO normal function to arrow functions