var computed = new Vue({
el: '#compute',
data: {
firstName: "Eva",
lastName: "Daniel"
},
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
})