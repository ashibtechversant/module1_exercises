(() => console.log("Loading User Details..."))();
const greet = () => {
  let greetingMessage = "Hello";
  return (fname, sname) => {
    greetingMessage += " " + fname + " " + sname;
    console.log(greetingMessage);
  };
};

const sayHello = greet();
sayHello("Ashib", "Rehman");
