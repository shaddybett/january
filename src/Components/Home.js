import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Sign up or log in</h1>

    </div>
  );
}
