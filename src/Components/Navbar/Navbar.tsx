import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export function Navbar(props: Props) {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/alternate">
        <button>Alternate</button>
      </Link>
      <Link to="/basicq">
        <button>BasicQuestionsPage</button>
      </Link>
      <Link to="/detailedq">
        <button>DetailedQuestionsPage</button>
      </Link>
    </>
  );
}

export default Navbar;
