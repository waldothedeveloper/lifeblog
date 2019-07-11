import React from "react";
import { FirebaseContext } from "./firebase/index";

function App() {
  return (
    <div>
      <FirebaseContext.Consumer>
        {firebase => {
          return <div>Firebase is being rendered here</div>;
        }}
      </FirebaseContext.Consumer>
    </div>
  );
}

export default App;
