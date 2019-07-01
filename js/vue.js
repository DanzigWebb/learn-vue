let app = new Vue({
  el: "#app",
  data: {
    mainTitle: 'Привет, Vue!',
    descript: 'начнем с малого',
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ],


    inputValue: ''
  },

  methods: {
    pushLi () {
      this.todos.push({ text: this.inputValue });
      this.inputValue = '';
    },
    delLi(index){
      this.todos.splice(index, 1)
    }
  }

})

