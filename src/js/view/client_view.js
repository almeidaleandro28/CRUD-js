const line = ( name, email, id ) => {
  return `<th scope="row">#</th>
                    <td data-name>${name}</td>
                    <td data-email>${email}</td>
                    <td><button class="btn btn_editar">editar</button></td>
                    <td><button class="btn btn_excluir">excluir</button></td>
                    `;
}

export {
	line
}