import { getClient, createLine } from "./controller/clients_controller.js";
import {  newClient } from "./controller/add_client_controller.js";
import {  deleteClient } from "./controller/delete_client_controller.js";
import { editClient } from "./services/clients_services.js";



getClient();
createLine();
newClient();
deleteClient();
