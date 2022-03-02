import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const titles = {
  home: "الرئيسية",
  expo: "قائمة البحوث",
  books: "الكتب",
};
const { home, expo, books } = titles;

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <ul className="list-nav">
          <li className="element">
            <Link to="/" className="target">
              {home}
            </Link>
          </li>
          <li className="element">
            <Link to="/expo" className="target">
              {expo}
            </Link>
          </li>
          <li className="element">
            <Link to="/books" className="target">
              {books}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
