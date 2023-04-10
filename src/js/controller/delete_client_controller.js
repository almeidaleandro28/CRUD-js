import { removeClient } from "../services/clients_services.js"
import { line } from "../view/client_view.js";
import { getClient } from "./clients_controller.js";


const deleteClient = ( ) => {
const $table = document.querySelector(".table");

$table.addEventListener("click", ( e ) => {
  e.preventDefault()
  const $btnDelete = e.target.className == "btn btn_excluir";

  if( $btnDelete ){
    const $line = e.target.closest("[data-id]");
    const $id = $line.dataset.id; 
    removeClient($id).then( () => $line.remove());
    getClient()
    console.log( $line)
    console.log( $id)
  }

});
}




export {
  deleteClient
}