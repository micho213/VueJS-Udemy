<template>
    <div id="all-friends">
        <h2> All friends </h2>
        <div v-for="(friend,index) in friends" v-bind:key="index">
            <span @click="unfriend(friend.name)"> {{ friend.name }} </span>

        </div>
    </div>
</template>
<script>
export default {
    name:"Allfriends",
    props: ["friends"] ,
    data() {
        return {
           
        }
    } ,
    methods : {
        unfriend(name) {
                    //  custom name of the event, name of param to pass 
            this.$emit('delete', {name})
        }
    }
}
</script>

<style>

</style>

