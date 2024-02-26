import * as React from "react";
import Layout from "../components/Layout";

export default function Contact() {
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
            </main>
        </Layout>
    );
}
