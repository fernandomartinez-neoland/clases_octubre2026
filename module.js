import { padre, variable, parametros, hijo, perro, gato, nieto, mascota } from "./js/clases.js";

// cuando se le asigna una clase a una variable se debe usar la palabra "new" previo al nombre dela clase y un parentesis como si se tratase de una funcion
const variable_padre = new padre();

console.log(variable.propiedad);

// cuando llamamos a una propiedad que NO es un metodo, este se le llama como ana propiedad basica de un json es decir "variable.propiedad"
console.log(variable_padre.variable);
// cuando llamamos a un metodo, este se debe llamar como una extension tipo propiedad de json, y se debe usar los parentesis como si se tratase de una funcion es decir "variable.propiedad()"
console.log(variable_padre.perro());


const variable_parametro=new parametros("pepito")

console.log(variable_parametro.imprimirNombre("fernando"))

const otroObjeto= new parametros("irene")
console.log(otroObjeto.imprimirNombre("marina"))



const nuevoObjeto= new parametros("cristina")
console.log(nuevoObjeto.imprimirNombre("agustin"))

const hijito= new hijo()
// el hijo aunque no tenga los metodos o variables del papo, si este extiende de una clase padre, entonces puede hacer uso de todas las variables y metodos del padre como que si fuesen propios
console.log(hijito.casa())
const perroRuido=new perro();
const gatoRuido=new gato();


const animales=[perroRuido, gatoRuido]

animales.forEach((item, index)=>{
    console.log(item.ruido())
})

const imprmirNieto= new nieto()

console.log(imprmirNieto.casa())


const miMascota=new mascota()

console.log(miMascota.miPet(gatoRuido))