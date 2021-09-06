   class Main{
       constructor (tasksEnst, 
            todoAmountSelect, 
            tasksSelect, 
            createTaskInputSelector, 
            changeModeAllSelector, 
            changeModeActiveSelector, 
            changeModeCompletedSelector, 
            clearAllCompletedBtnSelector, 
            confirmeAllBtnSelector) {
           this.tasksEnst = tasksEnst,
           this.todoAmountSelector = document.querySelector(todoAmountSelect),
           this.tasks = document.querySelector(tasksSelect),
           this.createTaskInput= document.querySelector(createTaskInputSelector),
           this.changeModeAll = document.querySelector(changeModeAllSelector),
           this.changeModeActive = document.querySelector(changeModeActiveSelector),
           this.changeModeCompleted = document.querySelector(changeModeCompletedSelector),
           this.clearAllCompletedBtn = document.querySelector(clearAllCompletedBtnSelector),
           this.confirmeAllBtn = document.querySelector(confirmeAllBtnSelector)
           
       }

       changeTasksAmount(){
        if(this.tasksEnst.todosAll.length){
            const todoAmount = this.tasksEnst.todosAll.reduce((total, curent) => {
                //console.log('curent: ', curent)
                //console.log('true', this.tasksEnst.todosAll.length)
                if(!curent.isCompleted){
                    return total + 1
                } else {
                    return total
                }
            }, 0)
            this.todoAmountSelector.innerText = todoAmount
            //console.log('Calc: ', todoAmount)
        } else{
            //console.log('false', this.tasksEnst.todosAll.length)
            this.todoAmountSelector.innerText = '0'
        }
       }

       creatTask(event){
            const taskText = event.target.value
            this.tasksEnst.addToTasks(taskText)
            this.displayTasks(this.tasksEnst.todosAll)
            event.target.value=''
       }

       clearParentNode(){
        const contentNode = document.querySelector('.content')
        contentNode.removeChild(this.tasks)
        this.tasks = document.createElement('div')
        this.tasks.classList.add('tasks')
        contentNode.appendChild(this.tasks)
        this.tasks = document.querySelector('.tasks')
       }

       displayTasks(selectedArray){
              
        this.clearParentNode()

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
                this.tasks.appendChild(task)

                //binding buttons for change task status

                const changeStatusBtns = document.querySelectorAll('.task__status')

                changeStatusBtns.forEach(changeStatusBtn => {
                    if (!changeStatusBtn.classList.contains('controled')){
                    changeStatusBtn.addEventListener('click', (event) => {
                        this.tasksEnst.todosAll = this.tasksEnst.createChangedStatusArray(event)
                        this.displayTasks(this.tasksEnst.todosAll)
                        this.changeTasksAmount()
                    })
                    changeStatusBtn.classList.add('controled')
                }
            })

                //binding buttons for delete task

                const deleteTaskBtns = document.querySelectorAll('.task__delete')

                deleteTaskBtns.forEach(deleteBtn => {
                    if (!deleteBtn.classList.contains('controled')){
                        deleteBtn.addEventListener('click', (event) => {
                            this.tasksEnst.todosAll = this.tasksEnst.createAfterDeletingArray(event)
                            this.changeTasksAmount()
                            this.displayTasks(this.tasksEnst.todosAll)
                        })

                        deleteBtn.classList.add('controled')
                    }
        })
        
                this.changeTasksAmount()
                })
        }
       }

        bindAllButtons(){
            this.changeTasksAmount()

            this.createTaskInput.addEventListener('keydown', (event) => {
                if(event.code === 'Enter'){
                    if(event.target.value !== '') {
                        this.creatTask(event)
                    }
                }
            })
        
            this.changeModeAll.addEventListener('click', () => {
                this.displayTasks(this.tasksEnst.todosAll)
            })
            
            this.changeModeActive.addEventListener('click', () => {
                const todosActive = this.tasksEnst.getTodosInProgress()
                this.displayTasks(todosActive)
            })
        
            this.changeModeCompleted.addEventListener('click', () => {
                const todosCompleted = this.tasksEnst.getTodosDone()
                this.displayTasks(todosCompleted)
            })
        
            this.clearAllCompletedBtn.addEventListener('click', () => {
                this.tasksEnst.clearAllCompletedTasks()
                this.displayTasks(this.tasksEnst.todosAll)
            })
        
            this.confirmeAllBtn.addEventListener('click', () => {
                this.tasksEnst.confirmeAllTasks()
                this.displayTasks(this.tasksEnst.todosAll)
            })
        }
   }

   class Tasks{
    constructor (todosAll, confirmeAllStatus) {
        this.todosAll = todosAll
        this.confirmeAllStatus = confirmeAllStatus
    }
    addToTasks(taskText){
        this.todosAll.push({
            id: Date.now(),
            isCompleted: false,
            title: taskText
        })
    }

    createChangedStatusArray(event){
        const newArray = this.todosAll.map(todo => {
            const searchedId = Number(event.target.parentNode.getAttribute('data'))
            if(todo.id === searchedId) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            } else {
                console.log('log')
                return {...todo}
            }
        })
        return newArray
    }

    createAfterDeletingArray(event){
        const newArray = this.todosAll.filter(todo => todo.id !== Number(event.target.parentNode.getAttribute('data')))
        return newArray
    }

    getTodosInProgress(){
        const todosActive = this.todosAll.filter((todo) => todo.isCompleted === false)
        return todosActive
    }

    getTodosDone(){
        const todosCompleted = this.todosAll.filter((todo) => todo.isCompleted === true)
        return todosCompleted
    }

    clearAllCompletedTasks(){
        this.todosAll = this.todosAll.filter(todo => todo.isCompleted !== true)
    }

    confirmeAllTasks(){
        if(this.confirmAllStatus){
            this.todosAll = this.todosAll.map(todo => ({
                ...todo,
                isCompleted: false
            }))
        } else {
            this.todosAll = this.todosAll.map(todo => ({
                ...todo,
                isCompleted: true
        }))
        }
        this.confirmAllStatus = !this.confirmAllStatus
    }
   }

window.addEventListener('DOMContentLoaded', () => {
    let todosAll = [],
        confirmeAllStatus = false
        
    const tasksEnst = new Tasks(todosAll, confirmeAllStatus),
          mainPage = new Main(
              tasksEnst, 
              '.task__amount__data', 
              '.tasks', 
              '.create__task__input', 
              '.mode__all', 
              '.mode__active',
              '.mode__completed',
              '.clear__completed',
              '.confirme__all'
              )
          
          mainPage.bindAllButtons()
})
