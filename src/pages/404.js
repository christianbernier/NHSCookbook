/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * 404.js — Error page
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
 */

import React from "react";
import GlobalCSS from "../components/GlobalCSS";
import Header from "../components/Header";
import BodyHeader from "../components/BodyHeader";
import BodyText from "../components/BodyText";
import { Helmet } from "react-helmet-async";

export default () => {
  return (
    <>
      <GlobalCSS />
      <Helmet>
        <title>404 | NHS Cookbook</title>
        <meta property="og:title" content="404 | NHS" />
      </Helmet>
      <Header />
      <div id="content_area">
        <BodyHeader
          text="Error 404 — Page not found"
          line={true}
        />
        <BodyText
          paragraphs={[
            "The page you were looking for could not be found.",
            "Please try again or contact Christian Bernier (21bernier3@lexingtonma.org) if you believe this is an error."
          ]}
        />
      </div>
    </>
  );
};
