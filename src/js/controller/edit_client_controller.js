import { getClient, editClient } from "../services/clients_services.js"; 


const getUrl = new URL( window.location );

const getId = getUrl.searchParams.get("id");

const $inputName = document.querySelector("[data-name]");
const $inputEmail = document.querySelector("[data-email]");

getClient( getId ).then( 
  (data) => {
          $inputName.value = data.nome
          $inputEmail.value = data.email })

