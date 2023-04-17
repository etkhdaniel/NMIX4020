
new Vue({
    el: '#app',
    data: {
        catArray: [],
        breeds: [],
        dpart1:"https://cdn2.thecatapi.com/images/",
        dpart2:".jpg"
    },
    created() {
        this.loadNextImage();
    },
    methods: {
        async loadNextImage() {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/breeds')
                this.catArray = response.data;
                for (i = 0; i < this.catArray.length; i++) {
                    let catObj = this.catArray[i].image;
                    catObj.name = this.catArray[i].name
                    this.breeds.push(catObj);
                } // for
            } catch (err) {
                console.log(err)
            } // try

        }
    },
    "image": {
        "id": "0XYvRd7oD",
        "width": 1204,
        "height": 1445,
        "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
    }
})
