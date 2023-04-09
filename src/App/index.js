import React from "react";
import { AppUI } from './AppUI.js'
import { TodoProvider } from "../TodoContext/Index.js";




function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
