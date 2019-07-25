<template>
    <div class="blogs">
        <h2> {{ BlogTitle }}</h2>
        <button @click="changeTitle()">changeTitle</button>
        <br>
        <input type="text" v-model="searchTerm" >

        <div v-for="post in filteredPosts" :key="post.id">
            <h3> {{ post.title }}</h3>
            <p> {{ post.body | snippet }} </p>    
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name:"Blogs" ,
    data () {
        return{
            BlogTitle :"Blogs" ,
            posts: [] ,
            searchTerm: ""
        }
    } , 
    methods: {
        changeTitle() {
            this.BlogTitle = "Amazing Blog site"
        }
    },
    computed: {
        filteredPosts(){
            return this.posts.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
    },
    // creating life cycle hooks
    beforeCreate(){
        // alert("before create hook")
    }, 
    created () {
        // alert ("Created hook")
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(response => {
            console.log(response)
            this.posts = response.data
        }).catch (err => {
            console.log(err)
        })
    },
    beforeUpdate( ) {
        // alert("before update hook")
    }
}
</script>
