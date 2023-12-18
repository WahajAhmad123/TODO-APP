// const item = document.querySelector("#item")
// const todobox = document.querySelector("#to-do-box")

// item.addEventListener(
//     "keyup",
//     function(event){
//         if(event.key=="Enter"){
//             addtodo(this.value);
//             this.value="";
//         }

//     }
// )
// var todolist=[];
// var element = document.createElement("li");
// function additem(){
//     var userTodo = document.getElementById('item').value;
//     var todoData = JSON.parse(localStorage.getItem("todolist"));
//    console.log(userTodo)
//     if (localitem ===null){
//      todolist.push({
//       userTodo : userTodo  
//      })
//      localStorage.setItem("todolist",JSON.stringify(todolist))
//     }
//     else{
//       localitem.push({
//         userTodo:userTodo
//       })
//     localStorage.setItem("todolist", JSON.stringify(localitem));
//     element.innerHTML=`
//     ${userTodo}
//      <i class="fa-solid fa-xmark text-danger myI" onclick="deleteItem()"></i>
//      `;
//     document.getElementById('item').value="";
//     }
//     todobox.appendChild(element)
// }

// function deleteItem(){
// element.remove()


// }


// const addtodo =(item) =>{
//     const listitem = document.createElement("li");
// //     listitem.innerHTML = `
// //    ${item}
// //     <i class="fa-solid fa-xmark"></i>
// //     `;
//     element.addEventListener(
//         "click",
//         function (){
//             this.classList.toggle("done")
//         }

        
//     )
//     listitem.querySelector("i").addEventListener(
//         "click",
//         function (){
//             listitem.remove()
//         }
//     )
//     todobox.appendChild(listitem)
// }

var userTitle = document.getElementById('userTitle');
var name = JSON.parse(localStorage.getItem("CurrentUsers")).username;
userTitle.innerHTML="Welcome" + " " + name;

var taskList;
var getCurrentUserId = JSON.parse(localStorage.getItem("CurrentUsers")).userId;
var userVal = document.getElementsByClassName('inputval')[0]
function addTodoItem(){
    var localitem = JSON.parse(localStorage.getItem("todolist"));
    if(localitem===null){
        taskList =[]
    }
    else{
        taskList =localitem;
    }
    taskList.push({
        CurrentUserId : getCurrentUserId,
        Description :  userVal.value
    })
    localStorage.setItem("todolist",JSON.stringify(taskList))
    showlist()
}
function showlist(){
    let output ="";
    let taskListShow = document.querySelector('.todoListItem')
    var todoData = JSON.parse(localStorage.getItem("todolist"));
    
    if(todoData===null){
        taskList =[]
    }
    else{
        taskList =todoData;
        
    }
    var currentUserId = JSON.parse(localStorage.getItem("CurrentUsers")).userId; 
    taskList.forEach((data, index) => {
        if (currentUserId=== data.CurrentUserId ){
            output += `<div class="todoList">
        <p class="ptext">${data.Description}</p>
        <button class="deleteTask" onclick="deleteItem(${index})">X</button>
        </div> `
        }
    });
    taskListShow.innerHTML=output  ;
    userVal.value="";
}
showlist()
function deleteItem(index){
    Swal.fire({
        title: 'Confirm to Delete?',
        text: "Are you sure?",
        type: 'warning',
        icon: "warning",
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm',
        showCancelButton: true,
    }).then(function (result) {
        if (result.isConfirmed) {
        var todoData = JSON.parse(localStorage.getItem("todolist"));
    taskList.splice(index , 1)
    localStorage.setItem("todolist",JSON.stringify(taskList))
    showlist()
            }
})
    // var todoData = JSON.parse(localStorage.getItem("todolist"));
    // taskList.splice(index , 1)
    // localStorage.setItem("todolist",JSON.stringify(taskList))
    // showlist()
}


function cleartask(){
    Swal.fire({
        title: 'Confirm to Delete?',
        text: "It will permanently deleted !, Your Todo Item will not recover again.",
        type: 'warning',
        icon: "warning",
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Yes, delete it!',
        showCancelButton: true,
    }).then(function (result) {
        if (result.isConfirmed) {
            localStorage.removeItem("todolist")
            userVal.value="";
            showlist()
         
            }
})

}

function logOut(){
    setTimeout(() => {
        window.location.href = "./index.html";
    }, 1000)
}