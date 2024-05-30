const suma = (valor1)=>{
    return (valor2)=>{
        return (valor3) => {return valor1 + valor2 + valor3}
    }
}

const f1 = suma(5)
const f2 = f1(3)
const f3 = f1(4)
console.log(f2(2))
console.log(f3(2))

