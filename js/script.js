//ejercicio 1 agregar un promt para ingresar edad, si es mayor o igual a 18 sera suficiente para manejar, si no se arrojara cuantos años faltan

let age = prompt('Enter your age:')
console.log('Your age: ' + age)
if (age >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log('You are left with ' + (18 - age) + ' years to drive')
}

//Ejercicio 2. Comparar mi edad con la del usuario

let myAge = 19 // usare mi edad como dato a comparar
let yourAge = prompt('Enter your age:')
console.log('Your age: ' + yourAge)

if (myAge > yourAge) {
    console.log('I am ' + (myAge - yourAge) + ' years older than you')
} else if (myAge < yourAge) {
    console.log('You are ' + (yourAge - myAge) + ' years older than me')
} else {
    console.log('We are the same age')
}


//Ejercicio 3 comparar a y b

let a = prompt('Enter value a:' )
let b = prompt('Enter value b:' )
console.log('a= '+ a)
console.log('b= '+ b)
console.log('usando if else')
if (a > b) {
    console.log('"a" is greater than b')
} else {
    console.log('"b" is greater than "a"')
}

console.log('usando ternary operator')

a > b ?     console.log('"a" is greater than b') : console.log('"b" is greater than "a"')



//ejercicio 4, identificar cual es la estacion del año

let mesName = prompt('Enter a month:')
mesName = mesName.toUpperCase() //para evitar erroes logicos se usa uppercase para convertir el nombre ingresado a mayusculas

if (mesName === 'MARZO' || mesName === 'ABRIL' || mesName === 'MAYO') {
    console.log('The season is Spring')

} else if (mesName === 'JUNIO' || mesName === 'JULIO' || mesName === 'AGOSTO') {
    console.log('The season is Summer')

} else if (mesName === 'SEPTIEMBRE' || mesName === 'OCTUBRE' || mesName === 'NOVIEMBRE') {
    console.log('The season is Autumn')

} else if (mesName === 'DICIEMBRE' || mesName === 'ENERO' || mesName === 'FEBRERO') {
    console.log('The season is Winter')

} else {
    console.log('The month does not exist')
}

//ejercicio 5, asignar una letra dependiendo la calificacion

let grade = prompt('Enter your grade:')

if (grade >= 90 && grade <= 100) {
    console.log('Your grade is A')
}else if(grade >=70 && grade <=89) {
    console.log('Your grade is B')
} else if (grade >=60 && grade <=69) {
    console.log('Your grade is C')
}else if(grade >=50 && grade <=59) {
    console.log('Your grade is D')
}else if (grade >=0 && grade <=49) {
    console.log('Your grade is F')
}else {
    console.log('Your grade is not valid')
}







