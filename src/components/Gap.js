/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * Gap.js — Creates a gap to space out content
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
 */

import React from "react";
import {css} from "@emotion/core";

/*
 * height (string) - The height of the gap (in CSS format and units)
 */

export default ({height}) => {
  return(
    <div
      css={css`
        height: ${height}
      `}
    />
  )
}