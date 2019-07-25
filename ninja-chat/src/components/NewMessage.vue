<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message ( enter )</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p v-if="feedback" class="red-text">{{feedback}}</p>

        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name:"NewMessage",
    props:["name"],
    data (){
        return {
            newMessage: null,
            feedback:null,
            ninjaID:null
        }
    },
    methods: {
        addMessage(){
            // allowing local storage for saving ninja name
            if (this.name){
                this.ninjaID = this.name
            }else {
                this.ninjaID = localStorage.name
            }
            if(this.newMessage){
                this.feedback = null

                db.collection("messages").add({
                    content: this.newMessage,
                    name:this.ninjaID,
                    timestamp: Date.now()
                }).catch(err =>{
                    console.log(err)
                })
                this.newMessage = null
                
            }else{
                this.feedback = "Enter a message to send"
            }
        }
    }
}
</script>
