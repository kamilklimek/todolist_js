(function(){
    //task inputs and submit from task form
    const taskBtnSubmit = document.getElementById("taskBtnSubmit");
    const taskForm = document.getElementById("taskForm");
    const taskNameInput = document.getElementById("inputTaskName");
    const taskDescriptionInput = document.getElementById("inputTaskDescription");

    let tasks = [];
  
    //load task values from form
    function loadInputValues(){
        return task = {
            name : taskNameInput.value,
            description : taskDescriptionInput.value
        }
    };

    //inputs are not empty
    function verifyInputValues(){
        const nameIsNotEmpty = taskNameInput.value.length > 0;
        const descriptionIsNotEmpty = taskDescriptionInput.value.length > 0;
        return nameIsNotEmpty && descriptionIsNotEmpty ? true : false;
    };

    //save task to list
    function saveInputsValues(tasks){
        if(verifyInputValues()){
            const task = loadInputValues();
            task.id = tasks.length;
            tasks.push(task);
        }
    };

    taskForm.addEventListener('submit', function(e){
        e.preventDefault();
        saveInputsValues(tasks);
        displayTasks();
        loadAllCompleteButtons();
        
    }, false);

    //display tasks
    const taskList = document.getElementById("taskList");
    function displayTasks(){
        
        removeChilds(taskList);
        
        tasks.forEach(task => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            li.innerText = "Nazwa zadania: " + task.name + " Opis: " + task.description;
            button.id = "#completetask"+task.id;
            button.classList.add("complete-btn");
            li.appendChild(button);
            taskList.appendChild(li);
        })


    }

    //clear childs from element (list)
    function removeChilds(list){
        while(list.firstChild){
            list.removeChild(list.firstChild);
        }

    }

    //complete task
    function loadAllCompleteButtons(){
        const completeButtons = Array.prototype.slice.call(document.querySelectorAll(".complete-btn"));

        completeButtons.forEach(btn=>{
            btn.addEventListener("click", function(){
                const id = Number.parseInt(btn.id[btn.id.length-1]);
                deleteTask(id);
                displayTasks();
            })
        })
    }

    //delete task and display
    function deleteTask(id){
        tasks.forEach(task =>{
            if(task.id === id){
                const index = tasks.indexOf(task);
                tasks = tasks.splice(index, 1);
                return;
            }
        })
    }

  
  

    


}());