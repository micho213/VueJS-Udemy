new Vue({
    el:'#app',
    data: {
        title:"Learning how to do Vue.js" ,
        name: "Michal",
        url:"https://vuejs.org/v2/api/",
        classes:["one","two"] ,
        wage:10,
        coords: {
            x:0,
            y:0
        },
        updateValue: "" ,
        updateValue2:""
    },

    methods: {
        greet(time){

            // `` these allow variable names to be placed inside ${}
            // vue puts the variables at the top of the instance so you can use
                // this.title and do not have to do this.data.title
            return `Hello and ${time}, ${this.name}! `
        },

        decreaseWage(){
            this.wage -= 1 
        },
        logEvent(e) {
            console.log(e);
        } ,

        logCoords(e) {
            this.coords.x = e.clientX;
            this.coords.y = e.clientY;

        },
        updateName(e){
            this.updateValue = e.target.value
                },
        logMessage() {
            console.log("hyelloo")
        }
    }
})