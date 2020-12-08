import parser from './core/utils';
import {dragons} from './dragons.js';
import {relationships} from './relationships.js';
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
    // j'attends 500 ms pour m'assurer que mon document s'est chargé completement. 
   await new Promise(resolve => setTimeout(resolve, 500));
    addCount ();

    //Apres 2 secondes j'affiche la liste des dragons
    await new Promise(resolve => setTimeout(resolve, 1000));
    addDragons();
    relationShips()



    function  addCount () {
        console.log('nbr drgon', dragons.count);
        return document.querySelector("#nbrDragon").innerHTML = dragons.count;
    }
     
    
    function addDragons () {
        let listDragon = document.querySelector('#listdragon');
        let li = null;
        for(const dragon of dragons.names){
            const {id, name, element } = dragon;
            console.log('listes dragons', dragon );
            li = document.createElement("li");
            li.innerHTML = `${id} , ${name} ${element?element: '' }`;
            listDragon.appendChild(li)
            let res = relationShips(id);
            console.log(res)
            
        
        }

        

    
    }


    function relationShips(id) {
        for (const relation of relationships) {
            const {id : idDragon, relations } = relation;
            if(id === idDragon) {
                return id
                
            }   
            
        }
        
    }
    

})()





