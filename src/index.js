// import { createStore } from "redux"

// const add = document.getElementById("add")
// const minus = document.getElementById("minus")
// const number = document.querySelector("span")

// number.innerText = 0

// const ADD = "ADD"
// const MINUS = "MINUS"

// const countModifiter = (count = 0, action) => {
//   //reducer나 modifier는 처음으로 나의 데이터를 바꿔준다 하지만 리턴하는것은 나의 application에 있는 data이다
//   console.log(count, action)
//   switch (action.type) {
//     case ADD:
//       return count + 1
//     case MINUS:
//       return count - 1
//     default:
//       return count
//   }
// }

// const countStore = createStore(countModifiter)

// const onChange = () => {
//   number.innerText = countStore.getState()
// }

// countStore.subscribe(onChange)

// const handleAdd = () => {
//   countStore.dispatch({ type: ADD })
// }
// const handleMinus = () => {
//   countStore.dispatch({ type: MINUS })
// }

// add.addEventListener("click", handleAdd)
// minus.addEventListener("click", handleMinus)

// console.log(countStore.getState())

// ---------------------------------------------------------------------------------------------------

// import { createStore } from "redux"
// const form = document.querySelector("form")
// const input = document.querySelector("input")
// const ul = document.querySelector("ul")

// const ADD_TODO = "ADD_TODO"
// const DELETE_TODO = "DELETE_TODO"

// const addToDo = (text) => {
//   return {
//     type: ADD_TODO,
//     text,
//   }
// }

// const deleteToDo = (id) => {
//   return {
//     type: DELETE_TODO,
//     id,
//   }
// }

// const reducer = (state = [], action) => {
//   console.log(state, action)

//   switch (action.type) {
//     case ADD_TODO:
//       return [{ text: action.text, id: Date.now() }, ...state]
//     case DELETE_TODO:
//       return []
//     default:
//       return
//   }
// }

// const store = createStore(reducer)

// // store.subscribe(() => console.log(store.getstate()))

// const paintToDos = () => {
//   const toDos = store.getState()
//   ul.innerHTML = ""
//   toDos.forEach((toDo) => {
//     const li = document.createElement("li")
//     const btn = document.createElement("button")
//     btn.innerText = "DEL"
//     btn.addEventListener("click", dispatchDeleteToDo)
//     li.id = toDo.id
//     li.innerText = toDo.text
//     li.appendChild(btn)
//     ul.appendChild(li)
//   })
// }

// store.subscribe(paintToDos)

// const dispatchAddToDo = (text) => {
//   store.dispatch(addToDo(text))
// }

// const dispatchDeleteToDo = (e) => {
//   const id = e.target.parentNode.id
//   store.dispatch(deleteToDo(id))
// }

// const onSubmit = (e) => {
//   e.preventDefault()
//   const toDo = input.value
//   input.value = ""
//   dispatchAddToDo(toDo)
// }

// form.addEventListener("submit", onSubmit)

// -----------------------------------------------------------------------------------------------

import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

ReactDOM.render(<App></App>, document.getElementById("root"))
