// console.log('Vinayak')

const arr=["a","b","c","d","e","f","g"]

const sampleObject={
    name:'vinayak',
    city:'bengaluru'
}
const sampleObject2={
    name:'kiran'
}

sampleObject2.__proto__=sampleObject

console.log(sampleObject2.city)