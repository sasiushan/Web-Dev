// waits for the page to load
window.addEventListener('load', ()=>
{
    const form = document.querySelector("#task_form_entry");
    const formInput = document.querySelector("#task_input");
    
    const tasks = document.querySelector("#tasks");

    // TESTING
    // console.log(form);
    // console.log(formInput);
    // console.log(tasks);

    form.addEventListener('submit', (e)=>
    {
        // prevent page for reloading on submit
        e.preventDefault();

        // is the task that is enter 
        const task = formInput.value;
        if(!task)
        {
            alert("Please enter a task!")
            return
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_el_content= document.createElement("div");
        task_el_content.classList.add("content");
         
        task_el.appendChild(task_el_content);

        const task_el_input = document.createElement("input");
        task_el_input.classList.add("text");
        task_el_input.type = "text";
        task_el_input.value = task;
        task_el_input.setAttribute("readonly", "readonly")
        
        task_el_content.appendChild(task_el_input);

        const task_el_action = document.createElement("div");
        task_el_action.classList.add("action");

        const task_el_action_edit = document.createElement("button");
        task_el_action_edit.classList.add("edit");
        task_el_action_edit.innerHTML="Edit";

        const task_el_action_delete = document.createElement("button");
        task_el_action_delete.classList.add("delete");
        task_el_action_delete.innerHTML ="Delete";

        task_el_action.appendChild(task_el_action_edit);
        task_el_action.appendChild(task_el_action_delete);


        task_el.appendChild(task_el_action);
        tasks.appendChild(task_el);

        task_el_action_edit.addEventListener("click", ()=>
        {
            if(task_el_action_edit.innerText=="EDIT")
            {
                task_el_input.removeAttribute("readonly");
                task_el_input.focus();
                task_el_action_edit.innerText="Save";
            }else{
                task_el_input.setAttribute("readonly", "readonly");
                task_el_action_edit.innerText="Edit";
            }
        });

        task_el_action_delete.addEventListener("click", ()=>
        {
            if(task_el_action_delete.innerText=="DELETE")
            {
                task_el.remove();
            }
        })
        
    })

})


// After creating const and initalizing to its html property(
// for the first example task_el is (div), the class name is added).

// when appending always append parent to child. (bigger to smaller)