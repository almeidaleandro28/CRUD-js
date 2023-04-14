import { getClient, createLine } from "./controller/clients_controller.js";
import {  newClient } from "./controller/add_client_controller.js";
import {  deleteClient } from "./controller/delete_client_controller.js";
import { editClient } from "./services/clients_services.js";

const btEdit = document.querySelector(".btn_editar");
const table = document.querySelector(".table");


table.addEventListener("click", ( e ) => {
  const event = e.target.className === "btn btn_editar";
  
  if( event ){
    window.open("http://127.0.0.1:5500/src/pages/update.html");
  }
  
});



getClient();
createLine();
newClient();
deleteClient();
