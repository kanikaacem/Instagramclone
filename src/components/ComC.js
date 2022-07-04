//import { FirstName } from "./fLifecycle";
import { FirstName, LastName } from "./fLifecycle";
export default function ComC() {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    {" "}
                    My Name is {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
      <h1> consumer takes only function</h1>
    </>
  );
}

//<FirstName.Consumer>
//        {(fname) => {
//          return (
//            <>
//              <h1> My Name is {fname}</h1>
//            </>
//          );
//        }}
//</FirstName.Consumer>
