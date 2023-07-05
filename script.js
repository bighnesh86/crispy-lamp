const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // this will add the tasks to list 
    if(inputBox.value === ''){
        alert("You must write something ");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span =document.createElement("span"); // add the cross icon to list
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // this is for clear the input-box after adding the tast to list
    saveData();
}

//toggle the list to check or uncheck 
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();