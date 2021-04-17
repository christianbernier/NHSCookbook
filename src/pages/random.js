/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * random.js — Redirects the user to a random recipe
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-05
 */

import React, { useEffect } from "react";

export default () => {

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      let ids = [];
      fetch(
        "https://spreadsheets.google.com/feeds/list/1IyOdIiRpaPV73GQkpmnnnQMKqalSRt7fTSHNPAZffIk/1/public/full?alt=json"
      )
        .then((data) => data.json())
        .then((data) => {
          for (const entry of data.feed.entry) {
              ids.push(entry["gsx$id"]["$t"]);
          }

          ids = ids.sort((a, b) => Math.random() - 0.5);

          window.location = `/recipe?id=${ids[0]}`;
        });
    }
  }, []);

  return <></>;
};
