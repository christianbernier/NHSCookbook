/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * submit.js — Redirects the user to the form to submit a recipe
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-10
 */

import React, { useEffect } from "react";

export default () => {

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.location = "https://docs.google.com/forms/d/e/1FAIpQLSfawKfOvHbayTKggPbInG6X4SKwNbwiTn7IyCg0QhYvG0jLyQ/viewform?usp=sf_link";
    }
  }, []);

  return <></>;
};
