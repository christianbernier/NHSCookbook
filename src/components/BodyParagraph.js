/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * BodyParagraph.js — Creates a stylized <p> with custom text
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-08-25
 */

import React from "react";
import { css } from "@emotion/core";

/*
 * text (string) - The text to be displayed
 */

export default ({ text }) => {
  return (
    <p
      css={css`
        font-size: 1.2rem;
        color: var(--font-color);
        font-family: "Inter", sans-serif;
        font-weight: 400;
        margin-left: 30px;
        margin-right: 50px;
        margin-bottom: 30px;

        @media only screen and (min-width: 1700px) {
          padding: 0 calc((100vw - 1700px) / 2);
        }

        @media only screen and (max-width: 500px) {
          margin-right: 30px;
          margin-left: 30px;
        }
      `}
    >
      {text}
    </p>
  );
};
