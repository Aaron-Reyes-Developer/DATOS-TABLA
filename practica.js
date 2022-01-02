function Capturar(){
    
    function Persona(nombre,contra){
        this.nombre = nombre;
        this.contra = contra;
    }

    var input_user = document.getElementById("user").value;
    var input_contra = document.getElementById("contra").value;
    
    nueva_persona = new Persona(input_user, input_contra);
    console.log(nueva_persona);
    Agreagar();

    


};
var baseDatos = [];
function Agreagar(){
    baseDatos.push(nueva_persona);
    console.log(baseDatos);

    document.getElementById("tabla").innerHTML += '<tBody><td>'+ nueva_persona.nombre + '</td><td>' + nueva_persona.contra +'</td></tBody>';

};