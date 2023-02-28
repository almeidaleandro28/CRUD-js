const line = ( id, name, email ) => {
  return `<th scope="row">${id}</th>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td><button class="btn btn_editar">editar</button></td>
                    <td><button class="btn btn_excluir">excluir</button></td>
                    `;
}

export {
	line
}