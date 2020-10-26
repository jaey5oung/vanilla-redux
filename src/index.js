import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifiter = (count = 0, action) => {
  //reducer나 modifier는 처음으로 나의 데이터를 바꿔준다 하지만 리턴하는것은 나의 application에 있는 data이다
  if (action.type === "ADD") {
    return count + 1
  } else if (action.type === "MINUS") {
    return count - 1
  } else {
    return count
  }
}

const countStore = createStore(countModifiter)

countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "MINUS" })

console.log(countStore.getState())
