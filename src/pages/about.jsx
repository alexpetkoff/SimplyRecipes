import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function About() {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptas illo aspernatur, necessitatibus
                            obcaecati laudantium nemo! Eveniet nostrum ullam
                            debitis ad perferendis quos ipsum hic impedit?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Suscipit corporis beatae, necessitatibus sunt
                            dicta provident.
                        </p>
                        <Link to="/contact" className="btn">
                            contact
                        </Link>
                    </article>
                    <StaticImage
                        src="../assets/about.jpeg"
                        alt="Person pouring salt in a bowl!"
                        className="about-img"
                        placeholder="blurred"
                    />
                </section>
            </main>
        </Layout>
    );
}
