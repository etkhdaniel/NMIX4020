var header = new Vue ({
    el: '#header',
    data: {
        yourName: 'Eva Daniel',
        description: "I am a CS major",
        linkOne: "Introduction",
        link2: "My Portfolio",
        link3: "About Me, OK??",
        link4: "Contact",
        link5: "my list"
    }
})

var intro = new Vue ({
    el: '#top',
    data: {
        name: "Eva",
        major: "Computer Science",
        UGA: "University of Georgia"
    }
})

var portfolio = new Vue ({
    el: '#portfolio',
    data: {
        portfolioTitle: "I don't currently have anything for my portfolio so here are some pictures of some dinosaurs.",
        image1: "images/triceretops.jpeg",
        imgText1: "Triceretops",
        image2: "images/velociraptor.jpeg",
        imgText2: "Velociraptor",
        image3: "images/allosaurus.jpeg",
        imgText3: "Allosaurus",
        image4: "images/microraptor",
        imgText4: "Microraptor",
        image5: "images/elasmosaurus.jpeg",
        imgText5: "Elasmosaurus",
        image6: "images/pterodactyl.jpeg",
        imgText6: "Pterodactyl",
    }
})

var list = new Vue ({
    el: '#list',
    link5: "My favorite Athens restaurants: ",
    data: {
        favorites: ['Last Resort', 'Hook & Reel', 'Marker7', 'Cali \'n Tito\'s', 'Bubble Cafe']
    }
})

var getcolor = new Vue ({
    el: '#function',
    data: {
        bgColor: '',
        colors: ['red', 'green', 'blue']
    },
    methods: {
        changeColor(color) {
            this.bgColor = color
        }
    }
})

var conditional = new Vue ({
    el: '#conditional',
    data: {
        teacherName: ""
    }
})

var contact = new Vue ({
    el: '#contact',
    data: {
        text: "Please do NOT contact me :("
    }
})