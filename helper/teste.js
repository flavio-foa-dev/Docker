const data =
[
  {
    name:"Renata",
    profissão: "Professora",
    idade: 45,
  },
  {
    name: "Erick",
    profissão:"Operador Loja",
    idade: 20,
  }
]
console.table(data)




const codigo = (id) =>{

const  ids = {
    1: 'a',
    2: 'b',
    3: 'c'
  }
  return "Sua letra é ...  " + ids[id]
}
const c = codigo(1)
console.log(c)