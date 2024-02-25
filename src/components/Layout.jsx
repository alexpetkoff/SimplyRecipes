import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./layout.css";

const Layout = ({ children }) => {
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    );
};

export default Layout;
