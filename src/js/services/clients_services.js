async function getClients(){
  let url = "http://localhost:3000/client";

  const response = await fetch( url );

  return  await response.json();
}

export {
  getClients
}