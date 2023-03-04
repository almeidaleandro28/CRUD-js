import { addClient } from "../services/clients_services.js";


const newClient = ( ) => {

  const nameClient = document.querySelector("[data-modal='client_name']");
  const clientEmail = document.querySelector("[data-modal='email']");
  
  const btnSave = document.querySelector("[data-modal='bt-save']");


  btnSave.addEventListener("click", (e) => {
    e.preventDefault();

   addClient( nameClient.value, clientEmail.value );
  })
  
};

export {
  newClient
}