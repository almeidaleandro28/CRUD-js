async function getClients(){
  let url = "http://localhost:3000/client";

  const response = await fetch( url );

  return  await response.json();
}

// add client

async function addClient( name, email) {
  let url = "http://localhost:3000/client";

	const options = { 
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8"
		},
		body: JSON.stringify( { nome: name, email: email } )
	};

	const response = await fetch(url, options);

	return response.body;
}

// delete client
// async function removeClient( id ){
//   let url = `http://localhost:3000/client/${id}`;

// 	const options = {
// 		method: "DELETE",
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: null
// 	};

// 	const response = await fetch(url, options);

// 	console( response)
// }

export {
  getClients,
	addClient,
	// removeClient
}