(() => console.log("Loading User Details..."))();
const greet = () => {
  let greetingMessage = "Hello";
  function greeting(fname, sname) {
    greetingMessage += " " + fname + " " + sname;
    console.log(greetingMessage);
  }
  return greeting;
};

const sayHello = greet();
sayHello("Ashib", "Rehman");
