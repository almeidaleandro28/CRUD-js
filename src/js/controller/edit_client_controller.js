const btEdit = document.querySelector(".btn_editar");
const table = document.querySelector(".table");

table.addEventListener("click", ( e ) => {
  const event = e.target.className === "btn btn_editar";

  if( event ){
    window.open("http://127.0.0.1:5500/src/pages/update.html")
  }
  
});


// btEdit.addEventListener("click", () => {
//   
// });;



