import React, { useState } from "react";
import { Link } from "gatsby";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="SimplyRecipes Logo" />
                    </Link>
                    <button className="nav-btn" onClick={() => setShow(!show)}>
                        <FaAlignJustify />
                    </button>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link
                        to="/"
                        className="nav-link"
                        activeClassName="active-link"
                        onClick={() => setShow(false)}
                    >
                        home
                    </Link>
                    <Link
                        to="/recipes"
                        className="nav-link"
                        activeClassName="active-link"
                        onClick={() => setShow(false)}
                    >
                        recipes
                    </Link>
                    <Link
                        to="/tags"
                        className="nav-link"
                        activeClassName="active-link"
                        onClick={() => setShow(false)}
                    >
                        tags
                    </Link>
                    <Link
                        to="/about"
                        className="nav-link"
                        activeClassName="active-link"
                        onClick={() => setShow(false)}
                    >
                        about
                    </Link>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn">
                            contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
