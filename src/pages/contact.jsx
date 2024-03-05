import * as React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

export default function Contact({ data }) {
    const recipes = data.allContentfulRecipe.nodes;

    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want to get in touch?</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam, ullam?
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quis laborum tenetur magnam. Officia, a autem!
                        </p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label className="form-label" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    className="form-input"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div className="form-row">
                                <label className="form-label" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    className="form-input"
                                    type="text"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="form-row">
                                <label className="form-label" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    className="form-textarea"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <button className="btn" type="submit">
                                Submit
                            </button>
                        </form>
                    </article>
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesouce!</h5>
                    <RecipesList recipes={recipes} />
                </section>
            </main>
        </Layout>
    );
}

export const query = graphql`
    query {
        allContentfulRecipe(
            filter: { featured: { eq: true } }
            sort: { title: ASC }
        ) {
            nodes {
                id
                title
                cookTime
                prepTime
                image {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: TRACED_SVG
                    )
                }
            }
        }
    }
`;
