import parser from './core/utils';
import {dragons} from './dragons.js';
import "babel-polyfill";

// console.log("App.js")
// console.log(parser("Bonjour tout le monde"));

// window.onload = function() {
//     what();
//     function what(){
//         document.getElementById('hello').innerHTML = 'hi';
//     };
// }


document.body.onload = (async () => {
    // j'attends un 500 ms pour m'assurer que mon document s'est chargé completement. c'est pour ne pas avoir 
   await new Promise(resolve => setTimeout(resolve, 500));
    addCount ();

    //Apres 2 secondes j'affiche la liste des dragons
    await new Promise(resolve => setTimeout(resolve, 1000));
    addDragons()



    function  addCount () {
        console.log('nbr drgon', dragons.count);
        return document.querySelector("#nbrDragon").innerHTML = dragons.count;
    }
     
    
    function addDragons () {
        let listDragon = document.querySelector('#listdragon');
        

        for(const dragon of dragons.names){
            const {id, name, element } = dragon;
            console.log('listes dragons', dragon );
        
        }
        var myNodeList = document.querySelectorAll('#listdragon');
        return dragons.from(myNodeList).forEach(function(el) {
            console.log('ee', el);
          });
        
    
        //return document.querySelector("#listdragon").innerHTML = dragons.names
    
    }
    

})()





