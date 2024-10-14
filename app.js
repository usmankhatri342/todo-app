

const form = document.querySelector("#todo-form");
const list = document.querySelector("#todo-list");
const saveList = document.querySelector("#saveList");
const todolist = [
    "NAMAZ",
    "practice",
    "github profile",
    "leetcode",

];
    
// const savelist = [

// ];
// localStorage.setItem("saveList", JSON.stringify(saveList));
// const save = JSON.parse(localStorage.getItem("saveList"));

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

