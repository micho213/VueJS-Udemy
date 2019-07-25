<template>
    <div class="chat container">
        <h2 class="center teal-text">Universal Ninja Chat</h2>
        <p v-if="ninjaID">Ninja ID: {{this.ninjaID}}</p>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text chip text-darken-2">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content }}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>
<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'


export default {
    name:"Chat",
    props:["name"],
    components:{
        NewMessage
    },
    data(){
        return {
            messages:[],
            ninjaID:null

        }
    } ,
    created(){
        if (this.name){
            this.ninjaID = this.name
        }else {
            this.ninjaID = localStorage.name
        }
        let ref = db.collection("messages").orderBy("timestamp")

        ref.onSnapshot(snap => {
            snap.docChanges().forEach(change => {
                if(change.type == 'added') {
                    let doc = change.doc
                    this.messages.push({
                        id:doc.id,
                        name:doc.data().name,
                        content:doc.data().content,
                        timestamp: moment(doc.data().timestamp).startOf('hour').fromNow()
                    })
                }
            })
        })
    }
}
</script>
<style>
.chat h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
}


.chat span {
    font-size: 1.4em;
}

.chat .time{
    font-size: 1em;
    display: block;
}

.messages{
    max-height: 300px;
    overflow: auto;
}

.messages::-webkit-scrollbar{
    width: 3px;
}

.messages::-webkit-scrollbar-track{
    background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
    background: rgb(46, 45, 45);
}

</style>
