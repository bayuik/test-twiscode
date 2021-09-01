import React from "react";
import logo from "./logo.png";

export default function Header() {
  return (
    <div>
      <div className="text-center">
        <img src={logo} width="200px" alt="Logo" />
      </div>
    </div>
  );
}
