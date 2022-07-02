import { useState, useEffect } from "react";
export default function Counter() {
  const [counter, setcounter] = useState(0);
  //component did mount // on passing the parameter in the array it behave as
  //component will update
  useEffect(() => {
    console.log("counter is mounted");
  }, [counter]);

  //useEffec(()=>{
  // console.log("counter is mounted");
  // return () => {
  // console.log("counter is unmounted");
  //}
  //});
  const IncrementCounter = () => {
    setcounter(counter + 1);
  };

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={IncrementCounter}>Increment</button>
    </>
  );
}
//https://www.youtube.com/watch?v=Zz9pLellSQA
