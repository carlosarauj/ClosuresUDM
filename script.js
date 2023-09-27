//Closures

function retornaFunc(nome){
    return function (){
        return nome
    }
}
let func = retornaFunc('Carlos')
let func2 = retornaFunc('Lucas')

console.dir(func)
console.dir(func2)

console.log(func(), func2())
