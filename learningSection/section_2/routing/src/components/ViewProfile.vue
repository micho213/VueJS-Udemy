<template>
    <div class="view-profile">
        <h2>Profile</h2>
        <p>{{user_id}}</p>
    </div>
</template>

<script>
export default {
    name:'ViewProfile',
    data() {
        return {
            user_id : this.$route.params.user_id
        }
    },
    watch : {
	$route: 'updateId' // runs a function updateId

    },
    methods:{
        updateId (){
            this.user_id = this.$route.params.user_id
        }
    }

}
</script>


<style>

</style>
