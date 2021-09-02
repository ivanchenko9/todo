window.addEventListener('DOMContentLoaded', () => {
    let todosAll = []

    const createTaskInput= document.querySelector('.create__task__input'),
          todoAmountSelector = document.querySelector('.task__amount__data'),
          changeModeAll = document.querySelector('.mode__all'),
          changeModeActive = document.querySelector('.mode__active'),
          changeModeCompleted = document.querySelector('.mode__completed')
    let deleteTaskBtns = document.querySelectorAll('.task__delete'),
        changeStatusBtns = document.querySelectorAll('.task__status'),
        tasks = document.querySelector('.tasks')

    changeTasksAmount()
          
    function changeTasksAmount () {
        if(todosAll.length){
            const todoAmount = todosAll.reduce((total, curent) => {
                console.log('curent: ', curent)
                if(!curent.isCompleted){
                    return total + 1
                } else {
                    return total
                }
            }, 0)
            todoAmountSelector.innerText = todoAmount
            console.log('Calc: ', todoAmount)
        } else{
            todoAmountSelector.innerText = '0'
        }
    }

    function clearParentNode () {
        const contentNode = document.querySelector('.content')
              contentNode.removeChild(tasks)
              tasks = document.createElement('div')
              tasks.classList.add('tasks')
              contentNode.appendChild(tasks)
              tasks = document.querySelector('.tasks')
    }

    function displayTasks (selectedArray) {
        
        clearParentNode()

        if (selectedArray.length > 0) {
            console.log(selectedArray)
            selectedArray.forEach(item => {
                const task = document.createElement('div'),
                      taskStatus = document.createElement('button'),
                      taskTitle = document.createElement('p'),
                      taskDelete = document.createElement('button')
        
                task.classList.add('task')
                taskStatus.classList.add('task__status')
                taskTitle.classList.add('task__title')
                taskDelete.classList.add('task__delete')
                if (item.isCompleted) {
                    taskTitle.classList.add('task__completed')
                }
        
                taskStatus.innerText = item.isCompleted?'Done':'In progress'
                taskTitle.innerText = item.title
                taskDelete.innerText = 'Delete'
                 
                task.append(taskStatus, taskTitle, taskDelete)
                tasks.appendChild(task)
        
                bindChangeStatusBtn(selectedArray)
                bindDeleteTaskBtn(selectedArray)
                changeTasksAmount()
                })
        }
    }
    

    function addToTasks( event) {
        todosAll.push({
            isCompleted: false,
            title: event.target.value
        })
        // console.log('All: ', todosAll)
        // console.log('Active: ', todosActive)
        // console.log('Completed: ', todosCompleted)
        //changeTasksAmount()
    }

    function creatTask (event) {
        addToTasks(event)
        displayTasks(todosAll)
        event.target.value=''
    }

    function bindDeleteTaskBtn (selectedArray) {
        //let currentArray = selectedArray
        deleteTaskBtns = document.querySelectorAll('.task__delete')
        deleteTaskBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener('click', (event) => {
                selectedArray = selectedArray.filter(task => task.title !== event.target.parentNode.childNodes[1].textContent)
                changeTasksAmount()
                displayTasks(selectedArray)
            })
        })
    }

    function bindChangeStatusBtn (selectedArray) {
        //let currentArray = selectedArray
        changeStatusBtns = document.querySelectorAll('.task__status')
        changeStatusBtns.forEach(changeStatusBtn => {
            changeStatusBtn.addEventListener('click', (event) => {
                selectedArray = selectedArray.map(changeStatusButton => {
                    if(changeStatusButton.title === event.target.parentNode.childNodes[1].textContent) {
                        return {
                            ...changeStatusButton,
                            isCompleted: !changeStatusButton.isCompleted
                        }
                    } else return changeStatusButton
                })
                displayTasks(selectedArray)
                changeTasksAmount()
            })
        })
    }

    createTaskInput.addEventListener('keydown', (event) => {
        if(event.code === 'Enter'){
            if(event.target.value !== '') {
                creatTask(event)
            }
        }
    })

    changeModeAll.addEventListener('click', () => {
        displayTasks(todosAll)
    })
    
    changeModeActive.addEventListener('click', () => {
        const todosActive = todosAll.filter((todo) => todo.isCompleted === false)
        displayTasks(todosActive)
    })

    changeModeCompleted.addEventListener('click', () => {
        const todosCompleted = todosAll.filter((todo) => todo.isCompleted === true)
        displayTasks(todosCompleted)
    })
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