import {doGet} from "./helpers.js";
import {getRowOfTable} from "./dom.helper.js";


let tbody = document.querySelector("tbody")


doGet( "https://ghibliapi.herokuapp.com/films")
    .then((r)=>{
        r.forEach(createTable);
    })
    .catch((e)=>console.log(e.message))


const createTable=({title,release_date,director,description})=>{
    const row = getRowOfTable([title,release_date,director,description]);
    tbody.append(row);
}







