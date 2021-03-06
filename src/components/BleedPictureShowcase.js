/*
 * National Honor Society — Lexington High School — Lexington, MA
 *
 * BleedPictureHeader.js — Creates a bleed picture correctly formatted
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2020-08-31
 */

import React from "react";
import { css } from "@emotion/core";
import SearchBar from "../components/SearchBar";

/*
 * imgsrc (image) - The image to be used as the bleed image
 * header (string) - The text to be displayed over the image
 * height (string) - The height (in CSS format and units) of the image
 */

export default ({ imgsrc, height, byline }) => {
  return (
    <div
      css={css`
        width: 100vw;
        margin-top: -50px;
        height: ${height};
        background: linear-gradient(to right, #00000060, #00000060),
          url(${imgsrc}) no-repeat center;
        background-size: cover;

        display: grid;
        grid-template-areas:
          "search"
          "byline";

        grid-template-columns: 80vw;
        grid-template-rows: auto 40px;
        padding-left: 10vw;

        @media only screen and (min-width: 1700px) {
          grid-template-columns: 1670px;
          padding-left: calc((100vw - 1670px) / 2);
        }

        @media only screen and (max-width: 500px) {
          flex-direction: column;
          margin-top: 0;
          background: linear-gradient(to right, #00000060, #00000060),
            url(${imgsrc}) no-repeat center;
          background-size: cover;
        }
      `}
    >
      <div
        css={css`
          grid-area: search;
          margin-top: 125px;
        `}
      >
        <SearchBar />
      </div>

      <p
        css={css`
          font-size: 1.2rem;
          color: var(--light);
          font-family: "Playfair Display", sans-serif;
          font-style: italic;
          font-weight: 800;
          padding-bottom: 10px;
          padding-top: 10px;
          line-height: 1.2rem;
          text-align: left;
          width: 80%;
          grid-area: byline;

          @media only screen and (max-width: 500px) {
            max-width: calc(100vw - 60px);
            margin-left: 30px;
            margin-right: 30px;
            margin-top: -40px;
          }
        `}
      >
        {byline}
      </p>
    </div>
  );
};
