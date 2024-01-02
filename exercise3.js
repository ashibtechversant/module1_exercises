let data = [
  {
    firstname: " Ann",
    lastname: " Wilson ",
    phone: "29378245",
    zip: "2 0 00 1 ",
    age: 160,
    id: " 12345 ",
  },
  {
    firstname: "Chris ",
    lastname: "Morgan",
    phone: "729378245",
    zip: " 65 00 1",
    age: 70,
    id: " 123453543636 ",
  },
  {
    firstname: " Andrew ",
    lastname: " Storm",
    phone: "543729378245",
    zip: " 7001 4",
    age: 32,
    id: "5 648",
  },
];

data.forEach((e) => {
  for (const i in e) {
    if (typeof e[i] === "string") e[i] = e[i].split(" ").join("");
  }
  e.name = e.firstname + " " + e.lastname;
  // if(e.phone.length>=10) e.phone=e.phone.slice(-10);
  // if(e.phone.length<10) 
  e.phone=e.phone.padStart(10,'0');
  if(e.age>150 || e.age<0) e.age="NA";
  e.id=e.id.slice(0,-3).concat("###");
});

data.forEach((e)=>{
    console.log("Name : "+e.name);
    console.log("Phone : "+e.phone);
    console.log("Zip : "+e.zip);
    console.log("Age : "+e.age);
    console.log("Id : "+e.id);
    console.log("-------------------------------------")
})