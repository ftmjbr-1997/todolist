let inputElem=document.querySelector("#addTodo")
let addBtnElem=document.querySelector(".btn")
let filterElem=document.getElementById("filter")
let sortElem=document.getElementById("sort")

const addTodoHandler=()=>{
    console.log(inputElem.Value)

     (inputElem.Value) ? console.log("okey") : console.log("not")
    
}

addBtnElem.addEventListener("click", addTodoHandler)

