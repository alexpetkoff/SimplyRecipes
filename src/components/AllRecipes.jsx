import React from "react";
import TagList from "./TagList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
    query {
        allContentfulRecipe(sort: { title: ASC }) {
            nodes {
                id
                title
                cookTime
                prepTime
                content {
                    tags
                }
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

const AllRecipes = () => {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipe.nodes;

    return (
        <div>
            <h4>all recipes</h4>
            <TagList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </div>
    );
};

export default AllRecipes;
