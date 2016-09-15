var footer = new Vue({
  el: ".footer"
});

Vue.component( "todo-list", {
  template: "#todo-list-template",
  props: ['tasks'],
  data: function() {
    return {
      newTask: "",
      taskPriority: 2 // 1: high, 2: normal. 3: low
    }
  },
  created: function() {
    if ( localStorage.todoData ) {
      this.tasks = this.getData( "todoData" );
    } else {
      this.initApp();
    }
  },
  methods: {
    togglePriority: function( task, priority ) {
      task.priority = priority;
      this.setData( "todoData", this.tasks );
    },
    toggleTodoStatus: function( task ) {
      task.completed = !task.completed
      this.setData( "todoData", this.tasks );
    },
    deleteTodo: function( task ) {
      this.tasks.$remove( task );
      this.setData( "todoData", this.tasks );
    },
    addTodo: function() {
      if ( this.newTask.length ) {
        this.tasks.push({
          task: this.newTask,
          priority: this.taskPriority,
          completed: false
        });
        this.newTask = "";
        this.setData( "todoData", this.tasks );
      }
    },
    isComplete: function( task ) {
      return task.completed;
    },
    notComplete: function( task ) {
      return !this.isComplete( task );
    },
    clearCompleted: function() {
      this.tasks = this.tasks.filter( this.notComplete );
      this.setData( "todoData", this.tasks );
    },
    setData: function( key, data ) {
      var todoData = JSON.stringify( data );
      localStorage.setItem( key, todoData );
    },
    getData: function( key ) {
      var todoData = localStorage.getItem( key );
      return JSON.parse( todoData );
    },
    resetApp: function() {
      this.tasks = this.getData( "originalData" );
      this.initApp();
    },
    initApp: function() {
      localStorage.clear();
      this.setData( "todoData", this.tasks );
      this.setData( "originalData", this.tasks );
    }
  },
  computed: {
    completedTasks: function() {
      if ( this.tasks ) {
        return this.tasks.filter( this.isComplete).length;
      }
    },
    remainingTasks: function() {
      if ( this.tasks ) {
        return this.tasks.filter( this.notComplete).length;
      }
    },
    totalTasks: function() {
      if ( this.tasks ) {
        return this.tasks.length;
      }
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    allTodos: [{
        task: "Do something",
        priority: 2,
        completed: false
      }, {
        task: "Do something else",
        priority: 1,
        completed: true
    }]
  }
});
