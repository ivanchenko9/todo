class EventEmitter {
    constructor() {
      this.events = {};
    }

    subscribe(eventName, fn) {
        if(!this.events[eventName]) {
          this.events[eventName] = [];
        }
          
        this.events[eventName].push(fn);
        
        return () => {
          this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
        }
      }

    emit(eventName, data) {
        const event = this.events[eventName];
        if( event ) {
          event.forEach(fn => {
             fn.call(null, data);
           });
         }
    }
}

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
           this.confirmeAllBtn = document.querySelector(confirmeAllBtnSelector),
           this.emitter = new EventEmitter()
           
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
            this.tasksEnst.saveDataOnLocaleStorage()
       }

       clearParentNode(){
        const contentNode = document.querySelector('.content')
        contentNode.removeChild(this.tasks)
        this.tasks = document.createElement('div')
        this.tasks.classList.add('tasks')
        contentNode.appendChild(this.tasks)
        this.tasks = document.querySelector('.tasks')
       }

       
    //    displayTasks(selectedArray){
              
    //     this.clearParentNode()

    //     if (selectedArray.length > 0) {
    //         console.log(selectedArray)
    //         selectedArray.forEach(item => {
    //             const task = document.createElement('div'),
    //                   taskStatus = document.createElement('button'),
    //                   taskTitle = document.createElement('p'),
    //                   taskDelete = document.createElement('button')
        
    //             task.classList.add('task')
    //             taskStatus.classList.add('task__status')
    //             taskTitle.classList.add('task__title')
    //             taskDelete.classList.add('task__delete')
    //             if (item.isCompleted) {
    //                 taskTitle.classList.add('task__completed')
    //             }
        
    //             taskStatus.innerText = item.isCompleted?'Done':'In progress'
    //             taskTitle.innerText = item.title
    //             taskDelete.innerText = 'Delete'

    //             task.setAttribute('data', item.id)
                 
    //             task.append(taskStatus, taskTitle, taskDelete)
    //             this.tasks.appendChild(task)

    //             //binding buttons for change task status

    //             const changeStatusBtns = document.querySelectorAll('.task__status')

    //             changeStatusBtns.forEach(changeStatusBtn => {
    //                 if (!changeStatusBtn.classList.contains('controled')){
    //                 changeStatusBtn.addEventListener('click', (event) => {
    //                     this.tasksEnst.todosAll = this.tasksEnst.createChangedStatusArray(event)
    //                     this.displayTasks(this.tasksEnst.todosAll)
    //                     this.changeTasksAmount()
    //                 })
    //                 changeStatusBtn.classList.add('controled')
    //             }
    //         })

    //             //binding buttons for delete task

    //             const deleteTaskBtns = document.querySelectorAll('.task__delete')

    //             deleteTaskBtns.forEach(deleteBtn => {
    //                 if (!deleteBtn.classList.contains('controled')){
    //                     deleteBtn.addEventListener('click', (event) => {
    //                         this.tasksEnst.todosAll = this.tasksEnst.createAfterDeletingArray(event)
    //                         this.changeTasksAmount()
    //                         this.displayTasks(this.tasksEnst.todosAll)
    //                     })

    //                     deleteBtn.classList.add('controled')
    //                 }
    //     })
        
    //             this.changeTasksAmount()
    //             })
    //     }
    //    }
       displayTasks(selectedArray){
              
        this.clearParentNode()

        if (selectedArray.length > 0) {
            console.log(selectedArray)
            selectedArray.forEach(item => {

                const itemTask = new TaskRender(item, this.tasks)
                itemTask.render()

                //binding buttons for change task status

                const changeStatusBtns = document.querySelectorAll('.task__status')

                changeStatusBtns.forEach(changeStatusBtn => {
                    if (!changeStatusBtn.classList.contains('controled')){
                    changeStatusBtn.addEventListener('click', (event) => {
                        this.emitter.emit('event:change-status', event)
                    })
                    changeStatusBtn.classList.add('controled')
                }
            })

                //binding buttons for delete task

                const deleteTaskBtns = document.querySelectorAll('.task__delete')

                deleteTaskBtns.forEach(deleteBtn => {
                    if (!deleteBtn.classList.contains('controled')){
                        deleteBtn.addEventListener('click', (event) => {
                            this.emitter.emit('event:delete-task', event)
                        })

                        deleteBtn.classList.add('controled')
                    }
        })
        
                this.changeTasksAmount()
                })
        }
       }

       addEmitters(){
        this.emitter.subscribe('event:create-task', (event) => {
            this.creatTask(event)
        })

        this.emitter.subscribe('event:mode-all', () => {
            this.displayTasks(this.tasksEnst.todosAll)
        })

        this.emitter.subscribe('event:mode-active', () => {
            const todosActive = this.tasksEnst.getTodosInProgress()
            this.displayTasks(todosActive)
        })

        this.emitter.subscribe('event:mode-completed', () => {
            const todosCompleted = this.tasksEnst.getTodosDone()
            this.displayTasks(todosCompleted)
        })

        this.emitter.subscribe('event:clear-all-completed', () => {
            this.tasksEnst.clearAllCompletedTasks()
            this.displayTasks(this.tasksEnst.todosAll)
        })

        this.emitter.subscribe('event:confirm-all', () => {
            this.tasksEnst.confirmeAllTasks()
            this.displayTasks(this.tasksEnst.todosAll)
        })

        this.emitter.subscribe('event:change-status', (event) => {
            this.tasksEnst.todosAll = this.tasksEnst.createChangedStatusArray(event)
            this.displayTasks(this.tasksEnst.todosAll)
            this.changeTasksAmount()
            this.tasksEnst.saveDataOnLocaleStorage()
        })

        this.emitter.subscribe('event:delete-task', (event) => {
            this.tasksEnst.todosAll = this.tasksEnst.createAfterDeletingArray(event)
            this.changeTasksAmount()
            this.displayTasks(this.tasksEnst.todosAll)
            this.tasksEnst.saveDataOnLocaleStorage()
        })

       }

        bindAllButtons(){
            this.changeTasksAmount()
            this.addEmitters()

            this.createTaskInput.addEventListener('keydown', (event) => {
                if(event.code === 'Enter'){
                    if(event.target.value !== '') {
                        this.emitter.emit('event:create-task', event)
                    }
                }
            })
        
            this.changeModeAll.addEventListener('click', () => {
                this.emitter.emit('event:mode-all')
            })
            
            this.changeModeActive.addEventListener('click', () => {
                this.emitter.emit('event:mode-active')
            })
        
            this.changeModeCompleted.addEventListener('click', () => {
                this.emitter.emit('event:mode-completed')
            })
        
            this.clearAllCompletedBtn.addEventListener('click', () => {
                this.emitter.emit('event:clear-all-completed')
            })
        
            this.confirmeAllBtn.addEventListener('click', () => {
                this.emitter.emit('event:confirm-all')
            })
        }

        firstLoad(){
            this.tasksEnst.getDataFromLocaleStorage()
            this.displayTasks(this.tasksEnst.todosAll)
            this.bindAllButtons()
        }
}

class Tasks{

    constructor (todosAll, confirmeAllStatus) {
        this.todosAll = todosAll
        this.confirmeAllStatus = confirmeAllStatus
    }

    getDataFromLocaleStorage(){
        if(localStorage.getItem('todosAll') && localStorage.getItem('confirmeAllStatus')){
            const rawArray = localStorage.getItem('todosAll')
            this.todosAll = JSON.parse(rawArray)
            this.confirmeAllStatus = localStorage.getItem('confirmeAllStatus')
        }
    }

    saveDataOnLocaleStorage(){
        const ModedArray = JSON.stringify(this.todosAll)
        localStorage.setItem('todosAll', ModedArray)
        localStorage.setItem('confirmeAllStatus', this.confirmeAllStatus)
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
        this.saveDataOnLocaleStorage()
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
        this.saveDataOnLocaleStorage()
    }
}

class TaskRender{
       constructor(item, tasks){
        this.id = item.id,
        this.title = item.title,
        this.isCompleted = item.isCompleted,
        this.tasks = tasks
       }

       render(){
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
            this.tasks.appendChild(task)
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
        
        mainPage.firstLoad()
})
