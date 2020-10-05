var firebaseConfig = {
    apiKey: "AIzaSyBqRhBCliDf-tOvWzwQ8QEabwlu44AbaJc",
    authDomain: "practfirebase-c2e71.firebaseapp.com",
    databaseURL: "https://practfirebase-c2e71.firebaseio.com",
    projectId: "practfirebase-c2e71",
    storageBucket: "practfirebase-c2e71.appspot.com",
    messagingSenderId: "278733044150",
    appId: "1:278733044150:web:1039ca75edb05112dca917",
    measurementId: "G-4FZQVZ7049"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  


function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='selecciona';
}
function createR() {
    
    //Guardo los datos capturados usando el id de cada control
    var id = document.getElementById("Input1").value;
    var nombre = document.getElementById("Input2").value;
    var posicion = document.getElementById("Input3").value;
    var equipo = document.getElementById("Input4").value;

    //validaciones
    if (id.length > 0) {
        //creo un objeto que guarda los datos
        var jugador = {
            id, //matricula:id
            nombre,
            posicion,
            equipo,
        }

        console.log(jugador);

        firebase.database().ref('Jugadores/' + id).update(jugador).then(() => {
           resetFields();
        }).then(()=>{
           read();
        });

        swal("Listo!", "Agregado correctamente", "success");

        
    } 
    else {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
        //firebase.database().ref('users/' + userId).set({
    //    username: name,
    //    email: email,
    //    profile_picture : imageUrl
    //  });
    //https://firebase.google.com/docs/database/web/read-and-write?hl=es

  
    //Esto se usa cuando no tienen un id/matricula y Firebase les genera una
    //automaticamente
    //const key = firebase.database().ref().child('Alumnos').push().key;
    //data[`Alumnos/${key}`]= alumno;
    //firebase.database().ref().update(data).then(()=>{
    //  alert('Agregado exitosamente');
    //})
}

function read(){
    document.getElementById("Table1").innerHTML='';

    var ref = firebase.database().ref('Jugadores');
/**   
   ref.on('value', function(snapshot) {
        snapshot.forEach(row=>{
            printRow(row.val());
        })
    });
 */
   
    ref.on("child_added", function(snapshot) {
        printRow(snapshot.val());
    });

}

function printRow(jugador){
    
    if(jugador!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = jugador.id;
        cell2.innerHTML = jugador.nombre; 
        cell3.innerHTML = jugador.posicion;
        cell4.innerHTML = jugador.equipo; 
        cell5.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${jugador.id})">Eliminar</button>`;
        cell6.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+jugador.id+')">Modificar</button>';
    }
}

function deleteR(id){
    firebase.database().ref('Jugadores/' + id).set(null).then(() => {
      read();
    }).then(()=>{
       swal("Listo!", "Eliminado correctamente", "success");
    });
}

function seekR(id){
    var ref = firebase.database().ref('Jugadores/' + id);
    ref.on('value', function(snapshot) {
      updateR(snapshot.val());
    });
}

function updateR(jugador){
    if(jugador!=null)
    {
        document.getElementById("Input1").value=jugador.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=jugador.nombre;
        document.getElementById("Input3").value=jugador.posicion;
        document.getElementById("Input4").value=jugador.equipo;
    }
}


//Para consulta el equipo
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input5").value;

    var ref = firebase.database().ref("Jugadores");
    ref.orderByChild("equipo").equalTo(c).on("child_added", function(snapshot) {
        printRowQ(snapshot.val());
    });

}


function printRowQ(jugador){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    //Agregamos la informacion a cada una de las columnas del registro
    cell1.innerHTML = jugador.id;
    cell2.innerHTML = jugador.nombre; 
    cell3.innerHTML = jugador.posicion;
    cell4.innerHTML = jugador.equipo; 
   
}