<template>
    <div class="signup container">
        <form class="card-panel" @submit.prevent="signup">
            <h2 class="center deep-purple-text">Sign up</h2>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="email">
            </div>

            <div class="field">
                <label for="pass">Password</label>
                <input type="password" name="passs" v-model="pass">
            </div>


                   <div class="field">
                <label for="alias">Alias</label>
                <input type="text" name="alias" v-model="alias">
            </div>
            
            <p v-if="feedback" class="red-text center"> {{feedback }}</p>

            <div class="center field">
                <button class="btn deep-purple">Sign up</button>
            </div>
        </form>
    </div>
</template>

<script>
import slugify from 'slugify'

import db from '@/firebase/init'
import firebase from 'firebase'


export default {
    name:"Signup",
    data(){
        return {
            email:null,
            pass:null,
            alias:null,
            feedback:null,
            slug:null
        }
    },
    methods:{
        signup(){
            if(this.alias && this.email && this.pass){
                this.slug = slugify(this.alias,{replacement:"-",
                remove: /[$*_+~/()'"!\-=:@-]/g,
                lower:true
                })

                let ref = db.collection("users").doc(this.slug)
                ref.get().then(doc=>{
                    if(doc.exists){
                        this.feedback = "This alias already exists"
                    }else {
                        firebase.auth().createUserWithEmailAndPassword(this.email,this.pass)
                        .then(cred => {
                            ref.set({
                                alias:this.alias,
                                geolocation:null,
                                user_id:cred.user.uid
                            })
                        }).then(()=>{
                            this.$router.push({name:"GMap"})
                        })
                        .catch(err => {
                            console.log(err)
                            this.feedback = err.message
                        })

                    }
                })
                console.log(this.slug)

            }else {
                this.feedback = "Enter an all fields"
            }
        }
    }
}
</script>

<style>
.signup{
    max-width:400px;
    margin-top: 60px;

}

.signup h2 {
    font-size:2em;
}

.signup .field {
    margin-bottom:16px; 
}

</style>
