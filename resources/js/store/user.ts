import { defineStore } from 'pinia';

export const userStore = defineStore('info', {
    state: () => ({
      info: false
    }),

    getters: {
        getInfo: state => state.info
    },
    
    actions: {
        setInfo(data: boolean) {
            this.info = data
        },
    }
})