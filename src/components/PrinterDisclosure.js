/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * PrinterDisclosure.js — Text to appear on printed versions of the site with information.
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-04-16
 */

import React from "react";
import { css } from "@emotion/core";
import Gap from "../components/Gap";

export default () => {
  return (
    <>
      <Gap height="30px" />
      <p
        css={css`
          color: var(--font-color);
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-style: italic;
          margin-left: 30px;
          margin-right: 50px;
          margin-bottom: 30px;

          display: none;

          @media only print {
            display: block;
            font-size: 11pt;
          }
        `}
      >
        This recipe is from the NHS Cookbook, produced by the Lexington, MA chapter of the National Honor Society. All recipes were submitted by Lexington High School students to be shared with the community. To learn more and see other recipes, please visit nhs-cookbook.netlify.com. © Copyright 2021 to the Lexington High School National Honor Society.
      </p>
    </>
  );
};
