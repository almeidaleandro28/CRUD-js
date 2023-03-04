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

export {
  getClients,
	addClient
}