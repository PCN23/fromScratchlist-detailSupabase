//import { getStadiums } from './fetch-utils.js';
//import { stadiums } from './stadiums.js';
import { getStadiums } from './fetch-utils.js';
import { renderStadiumLi } from './render-utils.js';

const stadiumLinks = document.getElementById('stadium-links');

// let state

async function loadData(){ 
    const stadiums = await getStadiums();
    console.log(stadiums);
  
    for (let stadium of stadiums) {
        const stadiumDiv = renderStadiumLi(stadium);
        stadiumLinks.append(stadiumDiv);
    }
  
}
loadData();
























// import functions and grab DOM elements
//const stadiums = document.getElementById('stadiums');


// let state


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
