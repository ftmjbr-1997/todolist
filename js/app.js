let inputElem=document.getElementsByTagName("input")
let addBtnElem=document.querySelector(".btn")
let filterElem=document.getElementById("filter")
let sortElem=document.getElementById("sort")
let containerElem=getElementById("container")

const addTodoHandler=()=>{
    console.log("okey")
    if(inputElem[0].value){
        alert("noterroe")

        // insertAdjacentHTML("afterend", text)

    }else{
        alert("error")
    }
    
}

addBtnElem.addEventListener("click", addTodoHandler)

