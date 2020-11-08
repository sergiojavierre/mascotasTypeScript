import { Movimiento } from "../interfaces/Movimiento";

class Mascota implements Movimiento{

    tipo: string;

    private _lvl : number
    private _puntosSiguienteLvl : number
    private _energia : number

    constructor(tipo: string){
        this.tipo = tipo
        this._lvl = 1
        this._puntosSiguienteLvl = 3
        this._energia = 100
    }
    
    //getters
    get lvl(): number{
        return this._lvl
    }

    get puntosSiguienteLvl(): number{
        return this._puntosSiguienteLvl
    }

    //métodos
    mueve(){
        if(this._energia > 0){
            if(this.tipo == "agua"){
                console.log("Nadando")
            }
            else if(this.tipo == "tierra"){
                console.log("Andando")
            }
            this._energia--
        }
        else{
            console.log("No puedo más :(")
        }
    }

    salta(){
        if(this._energia > 0){
            if(this.tipo == "agua"){
                console.log("No puedo saltar")
            }
            else if(this.tipo == "tierra"){
                console.log("Saltando")
                this._energia--
            }
        }
        else{
            console.log("No puedo más :(")
        }
    }

    descansa(){
        if(this._energia < 90){
            this._energia+=10
        }
        else{
            console.log("Ya no quiero dormir más! :(")
        }
    }

    estado(){
        console.log("\n- - -")
        console.log(`Lvl ${this._lvl}`)
        console.log(`Energía ${this._energia}`)
        console.log("- - -\n")
    }



}

export{Mascota}