console.log('hola');

let citas=[];
let registrocita = document.getElementById('registrocita');
let planillascitas = document.getElementById('planillacitas');

registrocita.addEventListener('submit',function (e) {
    e.preventDefault();
    agregarcita();

    })
function agregarcita() {
    

    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;

    let nuevacita = {
        nombre: nombre,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas
    };

    citas.push(nuevacita);

    planillascitas.innerHTML = '';

    for (let i = 0; i < citas.length; i++) {
         let cita = citas[i];
         let nuevafilacita=`
        <tr>
        <td>${citas[i].nombre}</td>
        <td>${citas[i].fecha}</td>
        <td>${citas[i].hora}</td>
        <td>${citas[i].sintomas}</td>
        <td><button onclick="eliminarCita(${i})">Eliminar</button></td>
        </tr>
        `;
        planillascitas.innerHTML += nuevafilacita;
    }
    limpiarformulario();
}
    
function eliminarCita(valor) {
        
        citas.splice(valor,1);

    planillascitas.innerHTML = '';
    for (let i = 0; i < citas.length; i++) {
            let cita = citas[i];
            let nuevafilacita=`
           <tr>
           <td>${citas[i].nombre}</td>
           <td>${citas[i].fecha}</td>
           <td>${citas[i].hora}</td>
           <td>${citas[i].sintomas}</td>
           <td><button onclick="eliminarCita(${i})">Eliminar</button></td>
           </tr>
           `;
           planillascitas.innerHTML += nuevafilacita;
       }
    
        
}

function limpiarformulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('sintomas').value = '';
}
function filtrarpornombre() {
   
    let filtro = document.getElementById('filtronombre').value;
    let filas = planillascitas.getElementsByTagName('tr');

    for (let i = 0; i < filas.length; i++) {
        let nombreCita = filas[i].getElementsByTagName('td')[0].innerText.toLowerCase();
        if (nombreCita.includes(filtro)) {
            filas[i].style.display = '';
        } else {
            filas[i].style.display = 'none';
        }
    }
}


