import {defineStore} from 'pinia'
import axios from "axios";
import router from "@/router/index.js";

export const useRootStore = defineStore('root', {
    state: () => ({
        currentUser: '',
        posts: []
    }),
    actions: {
        setCurrentUser(data) {
            this.currentUser = data;
            this.currentUser.isAuthorized = true;
        },
        clearCurrentUser() {
            this.currentUser = '';
            //this.currentUser.isAuthorized = false;
        },
        async getPosts() {
            const response = await axios.get('http://localhost:3000/posts')

            this.posts = response.data;
        },
        async addPost(post) {
            await axios.post('http://localhost:3000/posts', post)
                .then(() => {
                    this.posts.push(post)
                })
                .finally(() => {
                    router.push('/')
                })
        },
        async deletePost(id) {
            await axios.delete(`http://localhost:3000/posts/${id}`)
                .then(() => {
                    this.posts = this.posts.filter(post => post.id !== id);
                })

        }
    }
})