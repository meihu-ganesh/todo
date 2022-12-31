let todoItemsContainer = document.getElementById( "todoItemsContainer" );
let addTodoButton = document.getElementById( "addTodoButton" );

let todoList = [
    {
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    },
    {
        text: "Learn Python",
        uniqueNo: 4
    }
]; 

// todoList = [ "Learn HTML", "Learn CSS", "Learn Javascript", "Learn Python" ];

let todosCount = todoList.length;

function onTodoStatusChange( checkboxId, labelId ) {
    let checkboxElement =  document.getElementById( checkboxId );
    console.log( checkboxElement.checked );

    let labelElement = document.getElementById( labelId );
    /*    if ( checkboxElement.checked === true ) {
        labelElement.classList.add( "checked" ); 
    }   
    else {
        labelElement.classList.remove( "checked" );
    }  // instead use toggle as below  */
    labelElement.classList.toggle( "checked" );
}

function onDeleteTodo( todoId ) {
    let todoElement = document.getElementById( todoId );
    todoItemsContainer.removeChild( todoElement );
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;
    
    let todoElement = document.createElement( "li" );
    todoElement.classList.add( "todo-items-container" , "d-flex" , "flex-row" );
    todoItemsContainer.appendChild( todoElement );
    // console.log(todoItemsContainer);
    
    let inputElement = document.createElement( "input" );
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add( "checkbox-input" );
    todoElement.appendChild( inputElement );
    
    let labelContainer = document.createElement( "div" );
    labelContainer.classList.add( "label-container", "d-flex", "flex-row" );
    todoElement.id = todoId;
    todoElement.appendChild( labelContainer );

    let labelElement = document.createElement( "label" );
    labelElement.setAttribute( "for", checkboxId );
    labelElement.id = labelId;
    inputElement.onclick = function () {
        onTodoStatusChange( checkboxId, labelId );
    };
    labelElement.classList.add( "checkbox-label" );
    labelElement.textContent = todo.text;
    labelContainer.appendChild( labelElement );

    let deleteIconContainer = document.createElement( "div" );
    deleteIconContainer.classList.add( "delete-icon-container" );
    labelContainer.appendChild( deleteIconContainer );

    let deleteIcon = document.createElement( "i" );
    deleteIcon.classList.add( "far", "fa-trash-alt", "delete-icon" );
    deleteIcon.onclick = function () {
        onDeleteTodo( todoId );
    };
    deleteIconContainer.appendChild(deleteIcon);
};

function onAddTodo() {
    let userInputElement = document.getElementById( "todoUserInput" );
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert( "Enter Valid Element" );
        return;
    };
    todosCount += 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };
    createAndAppendTodo( newTodo ); 
    userInputElement.value = "";
};

addTodoButton.onclick = function () {
    onAddTodo();
};

for (let eachTodo of todoList) {
    createAndAppendTodo(eachTodo);
}