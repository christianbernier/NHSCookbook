/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * TextWithLinks.js — Displays a body of text with links embedded when encoded with the proper format
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-12-29
 */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";

/*
 * text (string) - The text to be encoded with links in this format: [link](url)
 */

export default ({ text }) => {

  const [textSections, setTextSections] = useState([]); //Each section of plain text without links
  const [linkTexts, setLinkTexts] = useState([]); //The text for each link
  const [linkURLs, setLinkURLs] = useState([]); //The URL for each link

  useEffect(() => {
    let ts = [], //text sections
        lt = [], //link texts
        lu = []; //link URLs
    
    let currentText = text;

    //This loop continues until all the text has been processed
    while (currentText.length > 0) {

      const nextSquareBracket = currentText.indexOf("[");

      if (nextSquareBracket === 0) { //The formatting encounters a square bracket, indicating a link
        const closingSquareBracket = currentText.indexOf("]"); //End of link text; beginning of link URL
        lt.push(currentText.substr(1, closingSquareBracket - 1));  //Extracting just the link text from this link
        const openingParenthesis = currentText.indexOf("(");
        const closingParenthesis = currentText.indexOf(")");
        lu.push(
          currentText.substr(
            openingParenthesis + 1,
            closingParenthesis - openingParenthesis - 1
          )
        ); //Extracting just the link URL from this link
        currentText = currentText.substr(closingParenthesis + 1); //Just leaves the unprocessed text for the loop to continue
      } else if (nextSquareBracket === -1) { //This happens when there are no more links to be processed
        ts.push(currentText); //Pushes the last text section
        currentText = ""; //Stops the loop
      } else {
        ts.push(currentText.substr(0, nextSquareBracket)); //Pushes text section
        currentText = currentText.substr(nextSquareBracket); //Resets currentText
      }
    }

    //Setting state variables:
    setTextSections(ts);
    setLinkTexts(lt);
    setLinkURLs(lu);
  }, []);

  return (
    <p
      css={css`
        font-family: "Inter", sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        margin-top: 15px;
      `}
    >
      {textSections[0]}
      {linkTexts.map((lt, i) => {
        return (
          <>
            <a
              href={linkURLs[i]}
              css={css`
                color: var(--font-color);
              `}
              key={`link-${i}`}
            >
              {lt}
            </a>
            {textSections[i + 1]}
          </>
        );
      })}
    </p>
  );
};
