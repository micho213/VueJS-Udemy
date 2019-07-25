new Vue({
    el:"#app2",
    data:{
        title:"learning ifs and loops in vue" ,
        show : true,
        showAge: true ,
        items:[1,2,3,4,5,6,7],
        dataArray: [ {name:"name1" , age:3},{name:"name2" , age:3},{name:"name3" , age:3}]
    } ,


    methods: {
        toggleName(){
            this.show = !this.show
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})