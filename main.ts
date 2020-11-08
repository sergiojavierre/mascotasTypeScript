import { Mascota } from "./clases/Mascota";

const readline = require('readline-sync')

const mascota = new Mascota("tierra")

while(true){
    mascota.estado()
    console.log("1) Mueve\n2) Salta\n3) Descansa\n\n0) Salir")
    let opcion = readline.question('Elige: ')
    if(opcion == 0){
        break
    }
    else if(opcion == 1){
        mascota.mueve()
    }
    else if(opcion == 2){
        mascota.salta()
    }
    else if(opcion == 3){
        mascota.descansa()
    }
}
