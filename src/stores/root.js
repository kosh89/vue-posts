import {defineStore} from 'pinia'
import axios from "axios";

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
            this.currentUser.isAuthorized = false;
        },
        async getPosts() {
            const response = await axios.get('http://localhost:3000/posts')

            this.posts = response.data;
        }
    }
})