import {getClients } from "../services/clients_services.js";

async function getClient(){
  let client = await getClients();

  return client[0].nome;
}

export {
  getClient
}