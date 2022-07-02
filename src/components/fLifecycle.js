import Counter from "./Counter";
import { useState, useEffect } from "react";
import axios from "axios";
export default function FLifecycle() {
  //useEffect Hook in react can be used for all the lifecycles
  //useEffec(()=>{...},[]) will runs only once after rendering will behave like the componentdidmount()
  const [showCounter, SetshowCounter] = useState(false);
  const [users, SetUsers] = useState();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      SetUsers(res.data);
    });
  }, []);
  const showcounterMethod = () => {
    SetshowCounter(!showCounter);
  };
  return (
    <>
      <div id="fLifecycle">
        <h1> ToDo List</h1>
        {users &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <h5>
                  {user.name} : {user.phone}
                </h5>
              </div>
            );
          })}
        <button onClick={showcounterMethod}>
          {" "}
          {showCounter === true ? "Hide Counter" : "Show Counter"}{" "}
        </button>
        {showCounter && <Counter></Counter>}
      </div>
    </>
  );
}

//work with the axios
//https://www.digitalocean.com/community/tutorials/react-axios-react
