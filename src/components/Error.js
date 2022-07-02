import { useEffect } from "react";
//default export value can be imported with any name
import Topic, { function1, function2 } from "./Exports";
//wildcard can also be used for the importing the other file function and send the data in the
//form of the object .

//import * as Exportfile from "./Exports.js";
// calling normal function
// Exportfile.function1()

//calling default function
// Exportfile.default

//here in the props you can simply get the props and you can also destructure it
//function Error(props)
//function Error({ismount,...array})
function Error({ ismount, counter, ...array }) {
  useEffect(() => {
    // const ToDoData = fetch("https://jsonplaceholder.typicode.com/todos");
    //console.log(ToDoData);
    //fetch return a promise to get the value in the promise if success we use then and if there is some
    //server error then we use catch statement
    //catch will return the error when there is prblm with the fetch itself not with the api for that
    //thing we should always check that the response.ok is true

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (!response.ok) {
          console.log("this is error");
        } else {
          return response.json();
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  //post request
  //you have to stringify the value when you send the data to the server
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "user1",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  //it means run only for once
  return (
    <>
      <div>
        <img src="/assets/reacttopic/lifecycle.png"></img>
      </div>
      <div> {Topic}</div>
      {function1()}
      {function2()}
    </>
  );
}
export default Error;

//What is useEffect hook in React?
//The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional. useEffect(<function>, <dependency>)
//useEffect runs on every render (which runs on every state change)

//component first letter should be capital
