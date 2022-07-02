//ES6 any variable of javascript should start with let,var or const

const topic_name = "'Export and Import'";
const function1 = () => {
  console.log("function 1 is called");
};
const function2 = () => {
  console.log("funtion 2 is called");
};

export default topic_name;
//you can export other function like this
export { function1, function2 };
