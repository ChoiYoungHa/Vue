const app = Vue.createApp({
    data() {
        return {
            courseGoal: '뷰 강의 다 듣기!',
            vueLink : 'https://www.naver.com',
            courseGoalA : '다 끝내보자.',
            courseGoalB : '할 수 있다.'
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
})

app.mount('#user-goal');
