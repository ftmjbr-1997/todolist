let inputElem = document.getElementsByTagName("input")
let addBtnElem = document.querySelector(".btn")
let containerElem = document.querySelector("#container")
let filterElem = document.querySelector("#filter")
let allTodoes = []
let localStorageTodos = []



const getAllTodoes = () => {
    localStorageTodos = JSON.parse(localStorage.getItem('todos'))
    if (localStorageTodos) {
        createdTodoHandler(localStorageTodos)
    } else {
        localStorageTodos = []
    }

}
const createdTodoHandler = (localStorageTodos) => {
    containerElem.innerHTML = ""
    localStorageTodos.forEach((todo) => {
        containerElem.insertAdjacentHTML("afterbegin",
            `<ul class="list-group list-group-horizontal rounded-0 bg-transparent">
         <li
          class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
            <div class="form-check">
              <input class="form-check-input me-0" type="checkbox" value="" onChange=checkedHandler(event)
             ${(todo.checked) ? "checked" : ""} id=${todo.id} aria-label="..."  />
            </div>
         </li>
         <li
          class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          <p class="lead fw-normal mb-0">${todo.title}</p>
         </li>
         <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
        <div class="d-flex flex-row justify-content-end mb-1">
            <a href="#!" class="text-info" data-mdb-toggle="tooltip"
                title="Edit todo"><i class="fas fa-pencil-alt me-3"></i></a>
            <a href="#!" class="text-danger" data-mdb-toggle="tooltip"
                title="Delete todo"><i class="fas fa-trash-alt"></i></a>
        </div>
        <div class="text-end text-muted">
            <a href="#!" class="text-muted" data-mdb-toggle="tooltip"
                title="Created date">
                <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>${todo.timeOfAddTodo}
                </p>
            </a>
        </div>
        </li>
        </ul>`)

    })
}
const checkedHandler = (event) => {
    localStorageTodos.forEach(todo => {
        if (todo.id === event.target.id) {
            todo.checked = !todo.checked
        }
    })
    setAllTodoes(localStorageTodos)
    createdTodoHandler(localStorageTodos)

}

const setAllTodoes = (localStorageTodos) => {
    localStorage.setItem('todos', JSON.stringify(localStorageTodos))
}

const addTodoHandler = () => {
    if (inputElem[0].value) {
        let newTodo = {
            id: crypto.randomUUID(),
            title: inputElem[0].value,
            checked: false,
            timeOfAddTodo: addTodoTimeHandler()
        }
        localStorageTodos.push(newTodo)
        setAllTodoes(localStorageTodos)
        getAllTodoes()
        inputElem[0].value = ""
    }
    else { alert("add modal") }

}

const addTodoTimeHandler = () => {
    let d = new Date()
    let Currentyear = d.getFullYear()
    let currentMonth = d.getMonth() + 1
    let currentDay = d.getDate()
    return `${Currentyear} - ${currentMonth} - ${currentDay}`
}

const filterTodoHandler = (filter) => {
    let newtodoes = [...localStorageTodos]
    let copytodoes
    if (filter === "All") {
        copytodoes = [...localStorageTodos]
    } else if (filter === "Completed") {
        copytodoes = newtodoes.filter(todo => todo.checked === true)
    } else if (filter === "Active") {
        copytodoes = newtodoes.filter(todo => todo.checked === false)
    }
    createdTodoHandler(copytodoes)

}

window.addEventListener('load', getAllTodoes)

addBtnElem.addEventListener("click", addTodoHandler)

inputElem[0].addEventListener("keydown", (event) => {
    event.keyCode === 13 && addTodoHandler()
})

filterElem.addEventListener("change", (event) => {
    filterTodoHandler(event.target.value)
})

cleartodoes.addEventListener("click", () => {
    localStorageTodos = []
    createdTodoHandler(localStorageTodos)
    localStorage.removeItem('todos')
})


