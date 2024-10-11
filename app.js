// Open Source
// Good first issue

// const timeOutKiID = setTimeout( () => {
//   console.log("testing");
// }, 6000);

// clearTimeout(timeOutKiID)

// const id = setInterval(() => {
//   console.count("testing");
// }, 1000);

// clearInterval(id);

// localStorage.setItem("mode", "dark");

// console.log(localStorage.getItem("mode"))

const form = document.querySelector("#todo-form");
const list = document.querySelector("#todo-list");

const todolist = [
    "NAMAZ",
    "practice",
    "github profile",
    "leetcode",

];
    
localStorage.setItem("mulist", JSON.stringify(todolist));

const mulist = JSON.parse(localStorage.getItem("mulist"));

console.log("mulist" , mulist);



// for (let i = 0; i < todolist.length; i++) {
//     const value = todolist[i]
//     list.innerHTML += `<li>${todolist[i]}</li>`    
     
// };




// const <li> </li> = localStorage.getItem("todomylist");

todolist.map(function(value , index) {
    console.log( index,"usman" , value);
     list.innerHTML += `<li>${value }</li>`
})
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const todo = event.target.children[0].value;

    list.innerHTML += `<li>${todo} </li>`;
  

    event.target.reset();
    
});

