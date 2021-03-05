import React from "react";
import { userContext, ageContext } from "./App";


function ComponentF() {
    return (
        <div>
          <userContext.Consumer>
            {(user) => {
              return (
                <ageContext.Consumer>
                  {(age) => {
                    return <div>component f,user= {user},age={age}</div>;
                  }}
                </ageContext.Consumer>
              );
            }}
          </userContext.Consumer>
        </div>
      );
}

export default ComponentF;



