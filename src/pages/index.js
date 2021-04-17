/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * index.js — Homepage of the NHS Cookbook website
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
 */

import React from "react";
import { css } from "@emotion/core";
import GlobalCSS from "../components/GlobalCSS.js";
import Header from "../components/Header.js";
import BleedPictureShowcase from "../components/BleedPictureShowcase.js";
import PopArea from "../components/PopArea.js";
import BodyHeader from "../components/BodyHeader.js";
import BodyText from "../components/BodyText.js";
import LinkBox from "../components/LinkBox";
import Gap from "../components/Gap.js";
import Footer from "../components/Footer.js";

import HeaderImageHome from "../../assets/headers/home.jpg";

const categories = [
  "Appetizer",
  "Bread",
  "Breakfast",
  "Entrée",
  "Sandwich",
  "Soup",
  "Dessert",
  "Snack",
  "All"
];

export default () => {
  return (
    <>
      <GlobalCSS />
      <Header />
      <div id="content_area">
        <BleedPictureShowcase
          imgsrc={HeaderImageHome}
          height="500px"
          byline="Mexican Burrito Bowls by Jusrin Padam"
        />

        <Gap height="30px" />
        <BodyHeader text="Welcome to the NHS Cookbook" line={true} />
        <BodyText
          paragraphs={[
            "Thank you for visiting the NHS Cookbook! We are thrilled to have received so many wonderful recipes from National Honor Society students and families. We hope this site provides you with delicious recipes and inspiration to learn to cook or practice your culinary skills.",
            "Want to get a taste of the options? Click the button below to be taken to a random recipe!"
          ]}
        />
        <LinkBox
          type="internal"
          text="Surprise me!"
          link="/random"
        />
        <Gap height="20px" />
        <PopArea
          header="Send us pictures!"
          body="We would love to see how your dishes come out! Please send us a photo at 21bernier3@lexingtonma.org or via our Instagram page @nhslex. We'll be sure to feature some submissions!"
        />
        <Gap height="50px" />
        <BodyHeader text="Search by category" line={true} />
        <BodyText
          paragraphs={[
            "Feel free to use the buttons below to find the best recipes in your favorite category.",
          ]}
        />
        <div
          css={css`
            width: 100%;
            margin-left: 15px;
            @media only screen and (min-width: 1700px) {
              width: 1700px;
              padding: 0 calc((100vw - 1700px) / 2);
            }
          `}
        >
          {categories.map((c) => (
            <LinkBox
              text={`${c} Recipes`}
              type="internal"
              special="skinny"
              link={`/category?c=${c}`}
              key={`category-${c}`}
              css={css`
                display: inline-block;
              `}
            />
          ))}
        </div>
        <Gap height="50px" />
        <BodyHeader text="Submit a recipe" line={true} />
        <BodyText
          paragraphs={[
            "We're always looking for new recipes to add. Please fill out the Google Form below to submit a recipe.",
          ]}
        />
        <LinkBox
              text={`Submit a Recipe`}
              type="external"
              link={`https://docs.google.com/forms/d/e/1FAIpQLSfawKfOvHbayTKggPbInG6X4SKwNbwiTn7IyCg0QhYvG0jLyQ/viewform?usp=sf_link`}
            />
        <Gap height="50px" />
        <Footer />
      </div>
    </>
  );
};
