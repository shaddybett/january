import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/prime">Prime</Link>
      <h1>Hello this is about</h1>
    </div>
  );
}
