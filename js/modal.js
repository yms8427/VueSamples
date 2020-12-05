var app = {
    data: function () {
        return {
            infoTitle: "Bilgilendirme"
        }
    },
    methods: {
        showInfo(){
            this.$refs.infoModal.show = true;
        },
        showWarning(){
            this.$refs.warningModal.show = true;
        },
        showError(){
            this.$refs.errorModal.show = true;
        },
        onWarningConfirmed() {
            console.log("Uyarı kabul edildi");
        },
        onInfoConfirmed() {
            console.log("Bilgilendirme kabul edildi");
        },
        onErrorConfirmed() {
            console.log("Hata kabul edildi");
        }
    }
};
var a = Vue.createApp(app).component("ba-modal", {
    template: "#modal-section",
    props: ["title", "content"],
    emits: ['on-confirmed'],
    data: function () {
        return {
            show: false
        };
    },
    methods: {
        close() {
            this.show = false;
        },
        confirm() {
            this.$emit("on-confirmed");
            this.show = false;
        }
    }
}).mount("#app");