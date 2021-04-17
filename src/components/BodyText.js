/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * BodyText.js — Creates a series of body paragraphs for text
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
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
