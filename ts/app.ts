 async function solicitarDatos() {
        try {
          const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
          const datos = await respuesta.json();
          console.log(datos);
        }
      }

      
let tabla = document.getElementById('tabla');
for(const fila of results){
    let tr = document.createElement('tr');
    for (const atributo of Object.values(fila)) {

        let celda = document.createElement('td');
        celda.textContent = atributo;
        celda.style.border = '1px solid';
        tr.appendChild(celda);
    }

    tabla.appendChild(tr);
}
document.body.appendChild(tabla);
}


cargarenTabla();