

let form = document.getElementById("form");
let ulMain = document.getElementById("main-ul");

let savedItems = localStorage.getItem("li");
if (savedItems) {

    ulMain.innerHTML = JSON.parse(savedItems);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
 

  let inputValue = event.target[0].value;

  let li = document.createElement("li");
  li.textContent = inputValue;
  li.className = "todo-li";

  ulMain.appendChild(li);
  

  localStorage.setItem("li", JSON.stringify(ulMain.innerHTML));

  event.target[0].value = "";
});








































// const form = document.querySelector("#todo-form");
// const list = document.querySelector("#todo-list");
// const saveList = document.querySelector("#saveList");
// const todolist = [
//     "NAMAZ",
//     "practice",
//     "github profile",
//     "leetcode",

// ];

// // const savelist = [

// // ];
// // localStorage.setItem("saveList", JSON.stringify(saveList));
// // const save = JSON.parse(localStorage.getItem("saveList"));

// localStorage.setItem("mulist", JSON.stringify(todolist));

// const mulist = JSON.parse(localStorage.getItem("mulist"));

// console.log("mulist" , mulist);



// // for (let i = 0; i < todolist.length; i++) {
// //     const value = todolist[i]
// //     list.innerHTML += `<li>${todolist[i]}</li>`    

// // };




// // const <li> </li> = localStorage.getItem("todomylist");

// todolist.map(function(value , index) {
//     console.log( index,"usman" , value);
//      list.innerHTML += `<li>${value }</li>`
// })
// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const todo = event.target.children[0].value;

//     list.innerHTML += `<li>${todo} </li>`;


//     event.target.reset();

// });

// todo_array.map((value)=>{
//     list.innerHTML += `<li> ${value} </li>`
// });


