const cats= ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(name){
    cats.shift("Milo")
}
function appendCat(name){
    cats.push("Broom")
}