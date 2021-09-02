window.addEventListener('DOMContentLoaded', () => {
    let todosAll = [],
        confirmAllStatus = false

    const createTaskInput= document.querySelector('.create__task__input'),
          todoAmountSelector = document.querySelector('.task__amount__data'),
          changeModeAll = document.querySelector('.mode__all'),
          changeModeActive = document.querySelector('.mode__active'),
          changeModeCompleted = document.querySelector('.mode__completed'),
          clearAllCompletedBtn = document.querySelector('.clear__completed'),
          confirmeAllBtn = document.querySelector('.confirme__all')
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

                task.setAttribute('data', item.id)
                 
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
            id: Date.now(),
            isCompleted: false,
            title: event.target.value
        })
    }

    function creatTask (event) {
        addToTasks(event)
        displayTasks(todosAll)
        event.target.value=''
    }

    function bindDeleteTaskBtn () {
        deleteTaskBtns = document.querySelectorAll('.task__delete')
        deleteTaskBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener('click', (event) => {
                console.log('Attr: ', event.target.parentNode.getAttribute('data'))
                todosAll = todosAll.filter(task => task.id !== Number(event.target.parentNode.getAttribute('data')))
                changeTasksAmount()
                displayTasks(todosAll)
            })
        })
    }
//event.target.parentNode.childNodes[1].textContent
    function bindChangeStatusBtn () {
        changeStatusBtns = document.querySelectorAll('.task__status')
        changeStatusBtns.forEach(changeStatusBtn => {
            changeStatusBtn.addEventListener('click', (event) => {
                todosAll = todosAll.map(changeStatusButton => {
                    if(changeStatusButton.id === Number(event.target.parentNode.getAttribute('data'))) {
                        return {
                            ...changeStatusButton,
                            isCompleted: !changeStatusButton.isCompleted
                        }
                    } else { console.log('log')
                    return changeStatusButton}
                })
                displayTasks(todosAll)
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

    clearAllCompletedBtn.addEventListener('click', () => {
        todosAll = todosAll.filter(todo => todo.isCompleted !== true)
        displayTasks(todosAll)
    })

    confirmeAllBtn.addEventListener('click', () => {
        if(confirmAllStatus){
            todosAll = todosAll.map(todo => ({
                ...todo,
                isCompleted: false
            }))
        } else {
            todosAll = todosAll.map(todo => ({
                ...todo,
                isCompleted: true
        }))
        }
        confirmAllStatus = !confirmAllStatus
        displayTasks(todosAll)
    })
    
})
