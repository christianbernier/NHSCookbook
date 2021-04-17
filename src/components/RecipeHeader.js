/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * RecipeHeader.js — A special type of BodyHeader for the title of the recipe
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
 */

import React from "react";
import { css } from "@emotion/core";

/*
 * text (string) - The title of the recipe
 * category (string) - The category of the recipe
 * time (string) - The time needed to make the recipe
 * difficulty (string) - The difficulty of the recipe
 */

export default ({ text, category, time, difficulty }) => {
  return (
    <div
      css={css`
        @media only screen and (min-width: 1700px) {
          padding: 0 calc((100vw - 1700px) / 2);
        }
      `}
    >
      <p
        css={css`
          font-size: 2.4rem;
          color: var(--font-color);
          font-family: "Playfair Display", sans-serif;
          font-weight: 800;
          margin-left: 30px;
          margin-top: 20px;
          margin-bottom: 15px;

          @media only screen and (max-width: 500px) {
            margin-right: 30px;
            margin-left: 30px;
          }

          @media only print{
            margin-top: -0.75in;
          }
        `}
      >
        {text}
        <p
          css={css`
            font-size: 1rem;
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-style: italic;
          `}
        >
          {(category && (time || difficulty)) ? `Category: ${category} — ` : ""}
          {(category && !(time || difficulty)) ? `Category: ${category}` : ""}
          {(time && difficulty) ? `Estimated time: ${time} — ` : ""}
          {(time && !difficulty) ? `Estimated time: ${time}` : ""}
          {(difficulty) ? `Difficulty: ${difficulty}` : ""}
        </p>
      </p>
    </div>
  );
};
