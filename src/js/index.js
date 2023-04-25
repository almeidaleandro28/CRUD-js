import { getClient, createLine } from "./controller/clients_controller.js";
import {  newClient } from "./controller/add_client_controller.js";
import {  deleteClient } from "./controller/delete_client_controller.js";

getClient();
createLine();
newClient();
deleteClient();


const table = document.querySelector(".table");

table.addEventListener("click", ( e ) => {

  const btnEdit = e.target.className === "btn btn_editar";

  if ( btnEdit ) {
    const linha = e.target.closest("[data-id]");
    const id = linha.dataset.id;
    window.open( `src/pages/update.html?id=${id}`,"_self");
    console.log(id)
  }
  
});

