(() =>{

//Set up Vue Instance
    const vm = new Vue({
        el : "#app", //Element we are linking Vue to

        data : { 
            message : "Welcome to your first Vue app!",

            targetURL : "https://www.google.ca/",

            vueMessage : "Fucking Trevor and his internet speak",

            anchorOff : true,

            deliciousFruit : [
                { name: "Apple", flavour: "Appley" },
                { name: "Lemon", flavour: "Lemony" },
                { name: "Grape", flavour: "Grapey" }
            ],

            hazVue : true
        },

        methods : {
            logFruit(e) {
                console.log(e.currentTarget);
            }
        }
    });  

})();