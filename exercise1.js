let array1=['apple','banana','mango'];
for(const i of array1) console.log(i);

let array2=[{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}];
for(const i of array2) console.log(i.fruit);
// for(const {fruit:i} of array2) console.log(i);

let object = { fruit1:'apple',fruit2:'banana',fruit3:'mango'};
for(const i in object) console.log(object[i]);