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
        description: "I don't current have anything for my portfolio so here are some pictures of dinosaurs.",
        portfolioTitle: "Eva's Portfolio",
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

var about = new Vue ({
    el: '#about',
    data: {
        header: 'About',
        img: "images/pic08.jpg",
        description: "Eva is a Computer Science student at the University of Georgia."
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
        teacherName: "",
        hornNumber: ""
    }
})



var contact = new Vue ({
    el: '#contact',
    data: {
        text: "Please do NOT contact me :("
    }
})