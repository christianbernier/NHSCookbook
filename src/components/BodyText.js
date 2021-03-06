/*
 * National Honor Society — Lexington High School — Lexington, MA 
 * 
 * BodyText.js — Created a series of paragraphs for bodies of text
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 * 
 * Created by Christian Bernier on 2020-08-25
 */

import React from "react";
import BodyParagraph from "../components/BodyParagraph.js";

/*
 * paragraphs (array of strings) - An array of lines to be displayed as seperate paragraphs
 */

export default ({ paragraphs }) => {
  return (
    <>
      {paragraphs.map((t, i) => (
        <BodyParagraph 
          text={t}
          key={`body_paragraph_${i}`}
        />
      ))}
    </>
  );
};
