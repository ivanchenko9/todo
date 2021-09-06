
    class MainPage {
        constructor(createTaskInputSelector,
                    todoAmount_Selector, 
                    changeModeAllSelector, 
                    changeModeActiveSelector, 
                    changeModeCompletedSelector, 
                    clearAllCompletedBtnSelector, 
                    confirmeAllBtnSelector,
                    tasksSelector){
          this.todosAll = [],
          this.confirmAllStatus = false,
          this.createTaskInput= document.querySelector(createTaskInputSelector),
          this.todoAmountSelector = document.querySelector(todoAmount_Selector),
          this.changeModeAll = document.querySelector(changeModeAllSelector),
          this.changeModeActive = document.querySelector(changeModeActiveSelector),
          this.changeModeCompleted = document.querySelector(changeModeCompletedSelector),
          this.clearAllCompletedBtn = document.querySelector(clearAllCompletedBtnSelector),
          this.confirmeAllBtn = document.querySelector(confirmeAllBtnSelector),
          this.tasks = document.querySelector(tasksSelector)
          this.changeTasksAmount()
          
        }

        setTodosAll(newArray){
            this.todosAll = newArray
        }

        getTodosAll(){
            return this.todosAll
        }

        changeTasksAmount(){
            if(this.todosAll.length){
                const todoAmount = this.todosAll.reduce((total, curent) => {
                    console.log('curent: ', curent)
                    if(!curent.isCompleted){
                        return total + 1
                    } else {
                        return total
                    }
                }, 0)
                console.log('Calc: ', todoAmount)
            } else{
                console.log(this.todoAmountSelector)
                this.todoAmountSelector.innerText = '0'
            }
        }

        clearParentNode () {
            const contentNode = document.querySelector('.content')
            console.log(this.tasks)
                  contentNode.removeChild(this.tasks)
                  this.tasks = document.createElement('div')
                  this.tasks.classList.add('tasks')
                  contentNode.appendChild(this.tasks)
                  this.tasks = document.querySelector('.tasks')
        }

        addToTasks( event) {
            this.todosAll.push(new Tasks(Date.now(), false, event.target.value, this.tasks)) //non actuall array
        }

        creatTask (event) {
            this.addToTasks(event)
            this.displayTasks(this.todosAll)
            event.target.value=''
        }

        createChangedStatusArray (event) {
            const newArray = this.todosAll.map(todo => {
                const searchedId = Number(event.target.parentNode.getAttribute('data'))
                if(todo.id === searchedId) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                } else { console.log('log')
                return {...todo}}
            })
            return newArray
        }
    
        createAfterDeletingArray (event) {
            const newArray = this.todosAll.filter(todo => todo.id !== Number(event.target.parentNode.getAttribute('data')))
            return newArray
        }

        displayTasks (selectedArray) {
            console.log('Function displayTasks()')
            this.clearParentNode()
    
            if (selectedArray.length > 0) {
                console.log(selectedArray)
                selectedArray.forEach(item => item.renderTask())
            }
        }

        bindAllButtons () {
            console.log('Function bindAllButtons()')
            this.createTaskInput.addEventListener('keydown', (event) => {
                if(event.code === 'Enter'){
                    if(event.target.value !== '') {
                        this.creatTask(event)
                    }
                }
            })
        
            this.changeModeAll.addEventListener('click', () => {
                displayTasks(this.todosAll)
            })
            
            this.changeModeActive.addEventListener('click', () => {
                const todosActive = this.todosAll.filter((todo) => todo.isCompleted === false)
                this.displayTasks(todosActive)
            })
        
            this.changeModeCompleted.addEventListener('click', () => {
                const todosCompleted = this.todosAll.filter((todo) => todo.isCompleted === true)
                this.displayTasks(todosCompleted)
            })
        
            this.clearAllCompletedBtn.addEventListener('click', () => {
                this.todosAll = todosAll.filter(todo => todo.isCompleted !== true)
                this.displayTasks(this.todosAll)
            })
        
            this.confirmeAllBtn.addEventListener('click', () => {
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
                this.displayTasks(this.todosAll)
            })
        }
    }

    class Tasks {
        constructor(id, isCompleted, title, parentNode){
            this.Main = new MainPage(('.create__task__input',
            '.task__amount__data',
            '.mode__all',
            '.mode__active',
            '.mode__completed',
            '.clear__completed',
            '.confirme__all',
            '.tasks'
            ))
            this.id = id
            this.isCompleted = isCompleted
            this.title = title
            this.parentNode = parentNode
            this.Main.bindAllButtons()
        }

        renderTask () {
                const task = document.createElement('div'),
                          taskStatus = document.createElement('button'),
                          taskTitle = document.createElement('p'),
                          taskDelete = document.createElement('button')
            
                    task.classList.add('task')
                    taskStatus.classList.add('task__status')
                    taskTitle.classList.add('task__title')
                    taskDelete.classList.add('task__delete')
                    if (this.isCompleted) {
                        taskTitle.classList.add('task__completed')
                    }
            
                    taskStatus.innerText = this.isCompleted?'Done':'In progress'
                    taskTitle.innerText = this.title
                    taskDelete.innerText = 'Delete'
    
                    task.setAttribute('data', this.id)
                     
                    task.append(taskStatus, taskTitle, taskDelete)
                    this.parentNode.appendChild(task)
    
                    //binding buttons for change task status
    
                    const changeStatusBtns = document.querySelectorAll('.task__status')
    
                    changeStatusBtns.forEach(changeStatusBtn => {
                        if (!changeStatusBtn.classList.contains('controled')){
                        changeStatusBtn.addEventListener('click', (event) => {
                            //const eventRepleced = event
                            this.Main.setTodosAll(createChangedStatusArray(event))
                            this.Main.displayTasks(this.Main.getTodosAll())
                            this.Main.changeTasksAmount()
                        })
                        changeStatusBtn.classList.add('controled')
                    }
                })
    
                    //binding buttons for delete task
    
                    let deleteTaskBtns = document.querySelectorAll('.task__delete')
    
                    deleteTaskBtns.forEach(deleteBtn => {
                        if (!deleteBtn.classList.contains('controled')){
                            deleteBtn.addEventListener('click', (event) => {
                                //const eventRepleced = event
                                this.Main.setTodosAll(createAfterDeletingArray(event))
                                this.Main.displayTasks(this.Main.getTodosAll())
                                this.Main.changeTasksAmount()
                            })
    
                            deleteBtn.classList.add('controled')
                        }
            })
            
            this.Main.changeTasksAmount()
            }
            
        
    }
    
    window.addEventListener('DOMContentLoaded', () => {})


    new MainPage('.create__task__input',
                 '.task__amount__data',
                 '.mode__all',
                 '.mode__active',
                 '.mode__completed',
                 '.clear__completed',
                 '.confirme__all',
                 '.tasks'
                 ).bindAllButtons()
    //new Tasks ()

    
    

