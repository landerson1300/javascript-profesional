console.log("Hello,TypeScript")

function add(a: number, b: number){
    return a + b;
}

const sum = add(2, 3)

// boolean
let muted: boolean = true;
muted = false;

//Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;
        
//String
let nombre: string = "Dorothy";
let saludo = 'Me llamo ${nombre}';

//Arreglos
let people: string [] = [];
people =["Isabel", "Nicole", "Raul"];

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(900);

// Enum
enum Color {
  Rojo ='Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Verde
console.log('Mi color favorito es ${colorFavorito}');

//Any
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};

//Object
let someObject: object = {type: 'Wildcard'};

//Función que suma números
