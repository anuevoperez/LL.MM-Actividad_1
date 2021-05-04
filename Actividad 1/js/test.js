/*llamamos al elemento por id = jsNav, al hacer click si la clase es barraNav añadimos responsive para que coja el cambio en css sino lo vuelve a dejar como barraNav */
function botonNav() {
    var x = document.getElementById("jsNav");
    if (x.className === "barraNav") {
      x.className += " responsive";
    } else {
      x.className = "barraNav";
    }
  }