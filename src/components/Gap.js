/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * Gap.js — Creates a gap to space out content
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-08-25
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