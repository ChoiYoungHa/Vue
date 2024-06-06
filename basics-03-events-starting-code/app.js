const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : "",
      confirmName : ""
    };
  },
  methods:{
    add(num){
      this.counter += num;
    },
    minus(num){
      this.counter -= num;
    },
    input(event, ex){
      this.name = event.target.value + ' ' + ex;
    },
    signup(event){
      alert('회원가입 완료!');
    },
    confirmInput(){
      this.confirmName = this.name;
      
    }
  }
});

app.mount('#events');
