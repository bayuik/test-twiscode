import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Notes from "./components/Notes";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Notes />
    </div>
  );
}
