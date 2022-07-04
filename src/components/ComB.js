import react, { useContext } from "react";
import { FirstName, LastName } from "./fLifecycle";

export default function Comb() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>
        {" "}
        My name is {fname} {lname}
      </h1>
    </>
  );
}

//<ComC><ComC/>
