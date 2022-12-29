let todoItemsContainer = document.getElementById( "todoItemsContainer" );
/* the way rahul sir explained
let todoList = [
    {
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    },
    {
        text: "Learn Python"
    }
]; 
 the way I stricked  */

todoList = [ "Learn HTML", "Learn CSS", "Learn Javascript", "Learn Python" ];

function createAndAppendTodo(todo) {

    
    let todoElement = document.createElement( "li" );
    todoElement.classList.add( "todo-items-container" , "d-flex" , "flex-row" );
    todoItemsContainer.appendChild( todoElement );
    // console.log(todoItemsContainer);
    
    let inputElement = document.createElement( "input" );
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add( "checkbox-input" );
    todoElement.appendChild( inputElement );
    
    let labelContainer = document.createElement( "div" );
    labelContainer.classList.add( "label-container", "d-flex", "flex-row" );
    todoElement.appendChild( labelContainer );

    let labelElement = document.createElement( "label" );
    labelElement.setAttribute( "for", "checkboxInput" );
    labelElement.classList.add( "checkbox-label" );
    labelElement.textContent = todo;
    labelContainer.appendChild( labelElement );

    let deleteIconContainer = document.createElement( "div" );
    deleteIconContainer.classList.add( "delete-icon-container" );
    labelContainer.appendChild( deleteIconContainer );

    let deleteIcon = document.createElement( "i" );
    deleteIcon.classList.add( "far", "fa-trash-alt", "delete-icon" );
    deleteIconContainer.appendChild(deleteIcon);
};

for (let eachTodo of todoList) {
    createAndAppendTodo(eachTodo);
}