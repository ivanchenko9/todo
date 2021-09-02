window.addEventListener('DOMContentLoaded', () => {
    const todosAll = []

    const createTaskInput= document.querySelector('.create__task__input'),
          todoAmountSelector = document.querySelector('.task__amount__data'),
          tasks = document.querySelector('.tasks')
    let deleteTaskBtns = document.querySelectorAll('.task__delete')

    changeTasksAmount()
          

    
    function changeTasksAmount(){
        if(todosAll.length){
            todoAmountSelector.innerText = todosAll.length
        } else{
            todoAmountSelector.innerText = '0'
        }
    }

    function displayTasks(){
        while (tasks.firstChild){
            tasks.removeChild(tasks.firstChild)
        }

        todosAll.forEach(item => {
        const task = document.createElement('div'),
              taskStatus = document.createElement('button'),
              taskTitle = document.createElement('p'),
              taskDelete = document.createElement('button')

        task.classList.add('task')
        taskStatus.classList.add('task__status')
        taskTitle.classList.add('task__title')
        taskDelete.classList.add('task__delete')

        taskStatus.innerText = item.isCompleted?'Done':'In progress'
        taskTitle.innerText = item.title
        taskDelete.innerText = 'Delete'
         
        task.append(taskStatus, taskTitle, taskDelete)
        tasks.appendChild(task)

        deleteTaskBtns = document.querySelectorAll('.task__delete')
        })
    }
    

    function addToTasks(event){
        todosAll.push({
            isCompleted: false,
            title: event.target.value
        })
        changeTasksAmount()
    }

    function creatTask(event){
        addToTasks(event)
        displayTasks()
        event.target.value=''
    }

    createTaskInput.addEventListener('keydown', (event) => {
        if(event.code === 'Enter'){
            if(event.target.value !== '') {
                creatTask(event)
            }
        }
    })

    for (let i = 0; i < deleteTaskBtns.length; i++){
        deleteTaskBtns[i].addEventListener('click', (event) => {
            console.log('test')
        })
    }
    
    
})


// function creatTask(event){
    //     const task = document.createElement('div'),
    //           taskStatus = document.createElement('button'),
    //           taskTitle = document.createElement('p'),
    //           taskDelete = document.createElement('button')

    //     task.classList.add('task')
    //     taskStatus.classList.add('task__status')
    //     taskTitle.classList.add('task__title')
    //     taskDelete.classList.add('task__delete')

    //     taskStatus.innerText = 'Done'
    //     taskTitle.innerText = event.target.value
    //     taskDelete.innerText = 'Delete'
         
    //     task.append(taskStatus, taskTitle, taskDelete)
    //     tasks.appendChild(task)

    //     todosAll.push({
    //         isCompleted: false,
    //         title: event.target.value
    //     })

    //     event.target.value = ''

    //     changeTasksAmount()

    //     deleteTaskBtns = document.querySelectorAll('.task__delete')
    // }