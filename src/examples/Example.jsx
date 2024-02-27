import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Example = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    description
                    simpleData
                    title
                    complexData {
                        age
                        name
                    }
                    person {
                        age
                        name
                    }
                }
            }
        }
    `);
    return (
        <div>
            <h2>{data.site.siteMetadata.person.name}</h2>
            <div>
                {data.site.siteMetadata.complexData.map((el, i) => {
                    return (
                        <p key={i}>
                            {el.name}:{el.age}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default Example;
