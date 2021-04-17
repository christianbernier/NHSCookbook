/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * category.js — A page showing all the recipes for a specific category
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
 */

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BodyHeader from "../components/BodyHeader";
import BodySubheader from "../components/BodySubheader";
import LinkBox from "../components/LinkBox";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import { Helmet } from "react-helmet-async";

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [doneLoading, setDoneLoading] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    let allRecipes = [];
    let cat = "";

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      setCategory(urlParams.get("c"));
      cat = urlParams.get("c");
      if (cat === "All") {
        cat = "";
      }
    }

    fetch(
      "https://spreadsheets.google.com/feeds/list/1IyOdIiRpaPV73GQkpmnnnQMKqalSRt7fTSHNPAZffIk/1/public/full?alt=json"
    )
      .then((data) => data.json())
      .then((data) => {
        for (const entry of data.feed.entry) {
          if (
            entry["gsx$display"]["$t"] === "TRUE" &&
            entry["gsx$category"]["$t"].indexOf(cat) !== -1
          ) {
            allRecipes.push({
              title: entry["gsx$title"]["$t"],
              id: entry["gsx$id"]["$t"],
              description: entry["gsx$description"]["$t"],
              time: entry["gsx$timeneeded"]["$t"],
              difficulty: entry["gsx$difficulty"]["$t"],
            });
          }
        }

        console.log(allRecipes);
        allRecipes = allRecipes.sort((a, b) => Math.random() - 0.5);
        setRecipes(allRecipes);
        setDoneLoading(true);
      });
  }, []);

  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>{category + " | NHS Cookbook"}</title>
        <meta property="og:title" content={category + " | NHS Cookbook"} />
      </Helmet>
      <Header />
      <div id="content_area">
        <Gap height="30px" />
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            @media only screen and (max-width: 500px){
              flex-direction: column-reverse;
              margin-top: -30px;
            }
          `}
        >
          <BodyHeader text={`${category} Recipes`} line={true} />
          <LinkBox
            text={"Home"}
            link={"/"}
            type={"internal"}
            special={"home"}
            css={css`
              display: inline-block;
            `}
          />
        </div>
        <BodyText
          paragraphs={
            recipes.length > 0
              ? [
                  "Click any of the titles below to be taken to its recipe page.",
                ]
              : doneLoading
              ? [
                  "Error. The category was not found in the database. Please try again.",
                ]
              : ["Currently loading the recipes..."]
          }
        />
        {recipes.map((r) => (
          <>
            <Link
              to={`/recipe?id=${r.id}`}
              css={css`
                text-decoration: none;
              `}
            >
              <div
                css={css`
                  display: grid;
                  grid-template-areas:
                    "title       details"
                    "description description";

                  grid-template-rows: auto auto;
                  grid-template-columns: 7fr 3fr;
                `}
              >
                <div
                  css={css`
                    grid-area: title;
                    text-decoration: underline;
                    text-decoration-color: var(--font-color);
                  `}
                >
                  <BodySubheader text={r.title} />
                </div>
                <div
                  css={css`
                    grid-area: description;
                  `}
                >
                  <BodyText paragraphs={r.description.split("\n")} />
                </div>
                <div
                  css={css`
                    grid-area: details;
                    text-align: right;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    @media only screen and (min-width: 1700px) {
                      padding-right: calc((100vw - 1700px) / 2);
                    }
                  `}
                >
                  <p
                    css={css`
                      font-size: 1rem;
                      color: var(--font-color);
                      font-family: "Inter", sans-serif;
                      font-weight: 400;
                      font-style: italic;
                      margin-right: 40px;
                    `}
                  >
                    {r.time ? `Estimated time: ${r.time}` : ""}
                  </p>
                  <p
                    css={css`
                      font-size: 1rem;
                      color: var(--font-color);
                      font-family: "Inter", sans-serif;
                      font-weight: 400;
                      font-style: italic;
                      margin-right: 40px;
                    `}
                  >
                    {r.difficulty ? `Difficulty: ${r.difficulty}` : ""}
                  </p>
                </div>
              </div>
            </Link>
            <Gap height="10px" />
          </>
        ))}
        <Gap height="30px" />

        {recipes.length > 0 ? <Footer /> : <></>}
      </div>
    </>
  );
};
