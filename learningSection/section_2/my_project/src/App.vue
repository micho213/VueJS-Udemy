<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <Navbar />
    <Allfriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Allfriends from './components/Allfirends'
import OnlineFriends from './components/OnlineFriends'


export default {
  name: 'app',
  components: {
    Navbar:Navbar, //this is NOT using ES6
    Allfriends, //this is using ES6
    OnlineFriends //this is using ES6
  },
  data () {
    return {
      msg: "My First Vue App, YAY!" ,
      friends:[
              {name:"Mario" , online:true} ,
              {name:"Luigi" , online:false} ,
              {name:"Toad" , online:true} ,
              {name:"Bowser" , online:false} 

            ]
    }
  } , 
  methods : {
    deleteFriend(payload) {
      console.log(payload)
      this.friends = this.friends.filter(friend => {
          return friend.name != payload.name 
      })
    }
  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: bold;
  text-align: center;
}
</style>
