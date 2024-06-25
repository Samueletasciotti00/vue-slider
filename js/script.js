
//Dichiarazione app
const { createApp } = Vue;


//App data,methods
createApp({
  data() {
    return {
    //   slides: [
        // { id: 1, name: 'Marvel\'s Spiderman Miles Morale', immage: 'img/01.webp' , text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'},
        // { id: 2, name: 'Ratchet & Clank: Rift Apart', immage: 'img/02.webp', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'},
        // { id: 3, name: 'Fortnite', immage: 'img/03.webp', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."},
        // { id: 4, name: 'Stray', immage: 'img/04.webp', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'},
        // { id: 5, name: 'Marvel\'s Avengers', immage: 'img/05.webp', text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'}
        
    //   ]
        
        // Dichiarazione di indicizazione dell IMG
        indexImg: 0,

        slides: {
            immages: [
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp'
            ],
            names: [
                'Marvel\'s Spiderman Miles Morale',
                'Ratchet & Clank: Rift Apart',
                'Fortnite',
                'Stray',
                'Marvel\'s Avengers'
            ],
            description: [
                
            ]
        }
    }
  },

  //Funzioni Vue per prev e next.
  methods: {
    // Dichiarazione funzione per Next
    next(){
        this.indexImg++;

        console.log('ok1');

        if (this.indexImg > this.slides.immages.length - 1 ) {
           this.indexImg = 0;
        }
    }
  }
}).mount('#app');