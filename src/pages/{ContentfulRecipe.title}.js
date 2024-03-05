import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';

const RecipeTemplate = ({ data }) => {

    const { title, cookTime, content, prepTime, servings, image, description: { description } } = data.contentfulRecipe;
    const pathToImage = getImage(image);
    const { tags, instructions, ingredients, tools } = content;

    return (
        <div>
            <h4>{title}</h4>
        </div>
    )
}

export const query = graphql`
query getSingleRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cookTime
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
    }
  }
`;


export default RecipeTemplate;
