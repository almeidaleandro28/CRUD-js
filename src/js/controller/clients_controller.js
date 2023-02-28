import { getClients } from "../services/clients_services.js";
import { line } from "../view/client_view.js";

async function getClient(){
  let clients = await getClients();
  
  clients.forEach( client => {
    createLine( client.nome, client.email, client.id )
  });

}

let createLine = ( name, email, id) => {
  const $tr = document.createElement("tr");
  const $tbody = document.querySelector(".tbody"); 

  const newLine = line( name, email, id);

  const content = newLine;
  
  $tr.innerHTML = content;
  $tbody.appendChild($tr);

  return $tr;
}


export {
  getClient,
  createLine
}