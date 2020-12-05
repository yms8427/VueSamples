var app = {
    data: function () {
        return {
            message: "",
            words: []
        }
    },
    methods: {
        resolve() {
            if (this.message) {
                this.words = this.message.split(" ");    
            }
            else{
                this.words = []
            }
        },
        navigate() {
            window.location.href = "page2.html"
        }
    }
};
Vue.createApp(app).mount("#app");