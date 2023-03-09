function depClone(obj) {
    let cloneObj ={}
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if (typeof element === obj &&  typeof element !== null ) {
            depClone(element)
        } else {
            cloneObj[key] = element
        }
      }
    }
    return cloneObj  
}

const tmep = {
  a: 'sss',
  b: {
    ss:'a',
    a:'dd'
  }
}

console.log(depClone(tmep) 
);