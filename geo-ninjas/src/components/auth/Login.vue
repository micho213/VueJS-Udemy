<template>
    <div class="login container">
        <form @submit.prevent="login" class="card-panel">
            <h2 class="center deep-purple-text">Login</h2>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="email">
            </div>

            <div class="field">
                <label for="pass">Password</label>
                <input type="password" name="passs" v-model="pass">
            </div>
            <p v-if="feedback" class="red-text center"> {{feedback}}</p>
            <div class="center field">
                <button class="btn deep-purple">Login</button>
            </div>
        </form>
    </div>
</template>


<script>
import firebase from 'firebase'

export default {
    name:"Login",
    data(){
        return{
            email:null,
            pass:null,
            feedback:null
        }
    },
    methods:{
        login(){
            if(this.email && this.pass){
                this.feedback = ""
                firebase.auth().signInWithEmailAndPassword(this.email, this.pass).then(cred=>{
                    this.$router.push({name:"GMap"})
                }).catch(err => {
                    this.feedback = err.message
                })
            }else{
                this.feedback = "Enter All fields"
            }
        }
    }
}
</script>
<style>
.login{
    max-width:400px;
    margin-top: 60px;

}

.login h2 {
    font-size:2.4em;
}

.login .field {
    margin-bottom:16px; 
}

</style>
