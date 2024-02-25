import * as React from "react";
import Layout from "../components/Layout";
import { ExampleButton } from "../components/Button";

export default function Home() {
    return (
        <Layout>
            <ExampleButton>Test Button</ExampleButton>
            <h1>Hello people!</h1>
        </Layout>
    );
}
