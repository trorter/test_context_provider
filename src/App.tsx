import React from 'react';
import './App.css';
import {NumberProvider} from "./NumberContext";
import {PlusButton} from "./PlusButton";
import {DisplayNumber} from "./DisplayNumber";
import {MinusButton} from "./MinusButton";

function App() {
  return (
      <NumberProvider initialNumberValue={42}>
        <PlusButton />
        <MinusButton />
        <DisplayNumber />
      </NumberProvider>
  );
}

export default App;
