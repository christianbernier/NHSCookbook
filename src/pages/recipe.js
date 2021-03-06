/*
 * National Honor Society — Lexington High School — Lexington, MA
 *
 * event.js — Page that fetches event information from a database for the calendar
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-02-12
 */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeHeader from "../components/RecipeHeader";
import BodySubheader from "../components/BodySubheader";
import BodyText from "../components/BodyText";
import Gap from "../components/Gap.js";
import LinkBox from "../components/LinkBox";
import { Helmet } from "react-helmet-async";

export default () => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [doneSearching, setDoneSearching] = useState(false);
  let recipeID = "00000";

  useEffect(() => {
    

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      recipeID = urlParams.get("id");
    }

    fetch(
      "https://spreadsheets.google.com/feeds/list/1IyOdIiRpaPV73GQkpmnnnQMKqalSRt7fTSHNPAZffIk/1/public/full?alt=json"
    )
      .then((data) => data.json())
      .then((data) => {
        for (const entry of data.feed.entry) {
          if (entry["gsx$id"]["$t"] === recipeID) {
            setRecipeDetails({
              title: entry["gsx$title"]["$t"],
              category: entry["gsx$category"]["$t"],
              description: entry["gsx$description"]["$t"],
              ingredients: entry["gsx$ingredients"]["$t"],
              appliancestools: entry["gsx$appliancestools"]["$t"],
              directions: entry["gsx$directions"]["$t"],
              timeneeded: entry["gsx$timeneeded"]["$t"],
              difficulty: entry["gsx$difficulty"]["$t"],
              pictures:
                entry["gsx$pictures"]["$t"].length > 0
                  ? entry["gsx$pictures"]["$t"].split(", ")
                  : [],
            });
            return;
          }
        }
        setDoneSearching(true);
      });
  }, []);

  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>
          {(recipeDetails.title
            ? recipeDetails.title
            : doneSearching
            ? "Error"
            : recipeID) + " | NHS Cookbook"}
        </title>
        <meta
          property="og:title"
          content={recipeDetails.title + " | NHS Cookbook"}
        />
      </Helmet>
      <Header />
      <div id="content_area">
        <Gap height="30px" />
        <RecipeHeader
          text={
            recipeDetails.title
              ? recipeDetails.title
              : doneSearching
              ? "Unable to find recipe"
              : "Searching..."
          }
          category={recipeDetails.category || ""}
          time={recipeDetails.timeneeded || ""}
          difficulty={recipeDetails.difficulty || ""}
        />
        {recipeDetails.title ? (
          <>
            <Gap height="20px" />
            <BodySubheader text="About the dish" line={true} />
            <BodyText paragraphs={[recipeDetails.description]} />
            <div
              css={css`
                display: grid;
                grid-template-areas: "directions ingredients";
                grid-template-rows: auto;
                grid-template-columns: 7fr 3fr;
                width: 100%;

                @media only screen and (max-width: 500px) {
                  grid-template-areas: "ingredients" "directions";
                  grid-template-rows: auto auto;
                  grid-template-columns: auto;
                }
              `}
            >
              <div
                css={css`
                  grid-area: directions;
                  width: 100%;
                `}
              >
                <BodySubheader text="Directions" line={true} />
                <BodyText paragraphs={recipeDetails.directions.split("\n")} />
              </div>
              <div
                css={css`
                  grid-area: ingredients;
                  width: 100%;
                `}
              >
                <BodySubheader text="Ingredients" line={true} />
                <BodyText paragraphs={recipeDetails.ingredients.split("\n")} />
                {recipeDetails.appliancestools ? (
                  <>
                    <BodySubheader text="Appliances/Tools Needed" line={true} />
                    <BodyText
                      paragraphs={recipeDetails.appliancestools.split("\n")}
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {recipeDetails.pictures.length > 0 ? (
              <>
                <BodySubheader text="Examples" line={true} />
                <BodyText
                  paragraphs={[
                    `Some submissions include pictures and/or videos. If you would like to submit your own to be featured on the site, please email Christian Bernier (21bernier3@lexingtonma.org) with a subject line "NHS Cookbook Photo for ${recipeDetails.title}."`,
                  ]}
                />
                <div
                  css={css`
                    text-align: center;
                  `}
                >
                  {recipeDetails.pictures.map((p, i) => (
                    <LinkBox
                      type="external"
                      text={`${recipeDetails.title} example${
                        recipeDetails.pictures.length > 1 ? ` ${i + 1}` : ""
                      }`}
                      special="skinny"
                      link={p}
                      css={css`
                        display: inline-block;
                      `}
                    />
                  ))}
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <BodyText
            paragraphs={
              doneSearching
                ? [
                    "There has been an error fetching this recipe's details from the database. Please ensure you entered a valid recipe ID and try again. If this issue persists, please contact Christian Bernier.",
                  ]
                : ["Currently searching the database..."]
            }
          />
        )}

        <Gap height="30px" />
        <Footer />
      </div>
    </>
  );
};
