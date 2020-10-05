// soal 1
const luas = () =>{
    let r = 32;
    const keliling
    const luasling

    luasling = 3.14*r*r
    keliling = 3.14*r*2

    console.log("luas lingkaran : "+luasling)
    console.log("Keliling Lingkaran : "+ keliling)

    return keliling
}

console.log(luas())

// soal 2
let kalimat = ""

const tambah = ()=>{
    const kata1 = 'Saya'
    const kata2 = 'adalah'
    const kata3 = 'seorang'
    const kata4 = 'frontend'
    const kata5 = 'developer'

    const string1 = `${kata1}`
    const string2 = `${kata2}`
    const string3 = `${kata3}`
    const string4 = `${kata4}`
    const string5 = `${kata5}`

    console.log(string1)
    console.log(string2)
    console.log(string3)
    console.log(string4)
    console.log(string5)
}

console.log(tambah())
// soal 3
const newFunction = (firstName, lastName) =>{
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: () => {
        console.log(`${firstName} ${lastName}`)
        return 
      }
    }
  }
   
  newFunction("William", "Imoh").fullName() 

// soal 4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

  const {firstName, lastName, destination, occupation, spell} = newObject

  console.log(firstName, lastName, destination, occupation, spell)

//  SOAL 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west, ...east,]

console.log(combined)