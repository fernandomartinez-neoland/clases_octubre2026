export class padre {
  // propiedad
  variable = "kjnsdkfcjnsd";
  // metodo
  perro() {
    // puedo usar variables que existan fuera del metodo si previo a la escritura del nombre escribo la palabra reservada "this" seguido de un punto (.) ejemplo:"this.variable"
    return this.variable;
  }
}

export const variable = {
  propiedad: "valor",
};

// variable.propiedad

export class parametros {
  nombrecito;
  // dentro de una clase solo podemos nombrar variables sin el uso de const/let y darle un valor con el signo igual
  // de igual manera creamos metodos solo escribiendo el nombre sin usar palabras reservadas como "function" o algo por el estilo
  constructor(nombre) {
    this.nombrecito = nombre;
  }
  imprimirNombre(amigo) {
    // dentro de un metodo podemos seguir trabajando de manera normal
    // como el metodo esta recibiendo un paramnetro, este se puede usar de manera libre como en una funcion, es decir que no requeire que usemos la palabra "this"
    const saludo = `hola ${this.nombrecito} este es mi amigo ${amigo}`;
    return saludo;
  }
}



class papa{
    casa(){
        return "mi casa es azul"
    }
}

// para que la clase hijo pueda hacer uso de las cosas del padre, este debe EXTENDER del padre usando la palabra reservada "extends" seguido del nombre de la clase padre
export class hijo extends papa{

}

export class nieto extends hijo{
    // el nieto puede tener el mismo metodo del abuelo (papa) y puede cambiarlo si lo necesita
    // si el hijo o el nieto no tienen el mismo metodo que el papa, al ser una extension entonces pueden llamar al metodo de papa y dira lo mismo que el metodo de papa
    casa(){
        return "vendi la casa"
    }
}

export class perro{
    ruido(){
        return "guau!"
    }
}

export class gato{
    ruido(){
        return "miau!"
    }
}



export class mascota{
    miPet(animal){

        return `este es mi gato que hace ${animal.ruido()}`

    }
}