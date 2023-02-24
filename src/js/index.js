import { getClient } from "./controller/clients_controller.js";

async function showClient(){
	let client = await getClient();

	console.log( client )
}

showClient()