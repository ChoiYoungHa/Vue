const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      last_name: '',
      //fullname: ''
    };
  },
  watch:{
    counter(value){
      if(value > 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        },2000);
      }
    }
  },
    // name(value) {
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + ' ' + this.last_name;
    //   }
    // },
    // last_name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  computed: {
    fullname(){
      console.log("computed start!")
      if (this.name === '' || this.last_name === ''){
        return '';
      }else{
        return this.name + " " + this.last_name;
      }
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset(){
      this.name = "";
      this.last_name = "";
    }
  }
});

app.mount('#events');
