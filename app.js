new Vue({
    el: '#app',
    data: {
        message: 'Bienvenue sur mon site Vue.js!',
        compteur: 0
    },
    methods: {
        incrementer() {
            this.compteur++;
        }
    }
});
