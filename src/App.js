import React, { useState } from "react";
import "./styles.css";
import { Button } from "./Button";
import { Color } from "./Color";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Ratan</h1>
      <h2>Start editing to see some magic happened!</h2>
      <p>Hi all</p>
      <Button />
      <Color />
    </div>
  );
}
