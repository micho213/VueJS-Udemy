<template>
  <div class="welcome container">
      <div class="card">
        <div class="card-content center-align" >
            <h2 class="teal-text">Welcome</h2>
            <form @submit.prevent="enterChat">
              <label for="name">Enter a Ninja Name</label>
              <input type="text" name="name" v-model="name">
              <p v-if="feedback" class="red-text"> {{feedback}}</p>
              <button class="btn teal">Enter Chat</button>
            </form>
        </div>
      </div>
  
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name:null,
      feedback:null
    }
  },

  mounted() {
      if (localStorage.name) {
        this.name = localStorage.name;
      }
    },
    watch: {
      name(newName) {
        localStorage.name = newName;
      }
    },

  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({name:"Chat", params:{name: this.name} } )
      }else {
        this.feedback = "Enter a name to join!"
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.welcome {
  max-width: 450px;
  margin-top: 100px
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin:2em;
}

</style>
