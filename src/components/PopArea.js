/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * PopArea.js — A full-width div to emphasize announcements
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-08-25
 */

import React from "react";
import { css } from "@emotion/core";

/*
 * header (string) - The text to be displayed in bold in the center
 * body (string) - The body text below the header
 */

export default ({ header, body }) => {
  return (
    <div
      css={css`
        width: calc(100vw - 40px);
        min-height: 100px;
        background-color: var(--light-gray);
        padding: 20px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: center;
        `}
      >
        <p
          css={css`
            font-size: 2rem;
            color: var(--font-color);
            font-family: "Playfair Display", sans-serif;
            font-weight: 800;
            margin: 20px 0;
          `}
        >
          {header}
        </p>
      </div>
      <p
        css={css`
          font-size: 1.2rem;
          color: var(--font-color);
          font-family: "Inter", sans-serif;
          font-weight: 400;
          margin: 20px 30px;
          text-align: center;

          @media only screen and (min-width: 1700px) {
            width: 1700px;
            margin-left: calc((100vw - 1700px) / 2);
          }
        `}
      >
        {body}
      </p>
    </div>
  );
};
