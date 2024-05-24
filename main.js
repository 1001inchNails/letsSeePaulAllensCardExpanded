
$(document).ready(function() {

  let id_index=1;
  // funcion para mostrar cartas cuando se borra alguna y se muestren las que quedan en el array
  function renderCards() {
    $('.main').empty(); // Vacia el main
    arrayCartas.forEach(carta => {
      let nuevaCarta = crearCarta(carta);
      $('.main').append(nuevaCarta);  // Lo rellena con los datos del array
    });
  }
    $('#textoBuscador').on('input', function() {  // Funcion para buscar cartas que contengan el texto del input
        var inputValue = $(this).val();
        $(".card").addClass("hide");  // Esconde las cartas
        $("div.card:contains('" + inputValue + "')").removeClass("hide"); // Muestra las que coinciden

      });

    $(".main").on('click','.cerrar img', function() { // Funcion para quitar del array la carta al darle al boton de cerrar
        let valor = $(this).closest("div.card").attr("id");
        for(let i=0;i<arrayCartas.length;i++){
          if(arrayCartas[i].id==String(valor)){
            arrayCartas.splice(i,1);
          }
        }
        renderCards();
    });
      // Clase carta para organizar los datos de los usuarios
      class Carta {
        constructor(id,nombre, datos, logo) {
          this.id = id;
          this.nombre = nombre;
          this.datos = datos;
          this.logo = logo;
          this.cerrar = "x.jpg"
        }
      }
      // Datos de los usuarios
      let datos = [
        [
            "Jose Perez",
            "All in all, it's just another brick in the wall",
            "1.png"
        ],
        [
            "Pepe Perez",
            "All in all, it's just another brick in the wall",
            "2.png"
        ],
        [
            "Carlos Sanchez",
            "We don't need no education, we don't need no thought control",
            "3.png"
        ],
        [
            "Maria Sanchez",
            "No dark sarcasm in the classroom",
            "4.png"
        ],
        [
            "Ana Castro",
            "Teachers, leave them kids alone. Hey! Teacher! Leave us kids alone!",
            "5.png"
        ],
        [
            "Jose Castro",
            "All in all, you're just another brick in the wall",
            "6.png"
        ],
        [
            "Madeleine Xas",
            "All in all, you're just another brick in the wall",
            "7.png"
        ],
        [
            "Valentin Garcia",
            "Wrong, do it again! Wrong, do it again!",
            "8.png"
        ],
        [
            "Roberto Garcia",
            "If you don't eat your meat, you can't have any pudding!",
            "9.png"
        ],
        [
            "Martin Garcia",
            "How can you have any pudding, if you don't eat your meat?",
            "10.png"
        ],
        [
            "Martina Garcia",
            "You! Yes! You, behind the bike sheds! Stand still, laddie!",
            "11.png"
        ]
    ]
      
      let arrayCartas=[]; // Para meter los datos en un array de objetos carta
      for(let dato of datos){
        arrayCartas.push(new Carta(String(id_index),dato[0],dato[1],dato[2]));
        id_index++;
      };
      
      function crearCarta(carta) {  // Funcion para crear elemento HTML con la carta
        return `
          <div id="${carta.id}" class="card">

            <div class="contenido">
              <span class="nombre"><i>${carta.nombre}</i></span>
              </br>
              <div class="datos">
              <p><i><b>${carta.datos}</b></i></p>
              </div>
          
            </div>           
            <div class="contenido2">
              <div class="logo">
                  <img src="${carta.logo}">
                </div>
                </br>
                <div class="cerrar">
                <img src="${carta.cerrar}">
              </div>
            </div>
          </div>
        `;
        
      }

      arrayCartas.forEach(carta => {
        let nuevaCarta = crearCarta(carta);
        $('.main').append(nuevaCarta);
      });


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Cojemos el modal
  var modal = document.getElementById("modalForm");

  // Cojemos el boton de apertura
  var btn = document.getElementById("plus");

  // Cojemos la x de cierre
  var span = document.getElementsByClassName("cerrarForm")[0];

  // Cuando el usuario clickea boton apertura, abre modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Cuando el usuario clickea boton cierra, cierra modal y borra valores de los inputs
  span.onclick = function() {
    modal.style.display = "none";

    document.getElementById("nombre").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("foto").value = "";
  }

  // Cuando el usuario clickea fuera del modal, cierra modal y borra valores de los inputs
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

    document.getElementById("nombre").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("foto").value = "";
    }
  }

  // formulario
  document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let descr = document.getElementById("desc").value;
    let rutafoto = document.getElementById("foto").value;
    rutafoto=rutafoto+".png";

    // para que no se pueda enviar sin todos los inputs rellenados
    let nombreCheck = document.getElementById("nombre").value.trim();
    let descrCheck = document.getElementById("desc").value.trim();
    let fotoCheck = document.getElementById("foto").value.trim();

  if (nombreCheck && descrCheck && fotoCheck) { // para que no se pueda enviar sin todos los inputs rellenados
    arrayCartas.push(new Carta(String(id_index),nombre,descr,rutafoto));  // Se añade la nueva carta al array
    for(let i=0;i<arrayCartas.length;i++){
      if(arrayCartas[i].id==id_index){
        let nuevacarta=crearCarta(arrayCartas[i]);
        $('.main').append(nuevacarta);  // Se añade la nueva carta a la pagina
      }
    }
    id_index++; // Para actualizar la variable ID (para que sean unicas)
    var modal = document.getElementById("modalForm");

    modal.style.display = "none";

    document.getElementById("nombre").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("foto").value = "";
    
  }

    
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////
});