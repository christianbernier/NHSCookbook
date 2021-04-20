/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * Rating.js — A recipe's rating, pulled from the backend
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-04-19
 */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import StarFilled from "../../assets/star_filled.png";
import StarEmpty from "../../assets/star_empty.png";

export default ({ id }) => {
  const [recipeRating, setRecipeRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [userReview, setUserReview] = useState(0);
  const [userHoverReview, setUserHoverReview] = useState(-1);

  useEffect(() => {
    fetch(`https://nhs-cookbook.glitch.me/reciperating/${id}`)
      .then((data) => data.json())
      .then((reviews) => {
        setTotalReviews(reviews.totalResponses);
        const rating = reviews.averageResponse;
        if (rating > 0) {
          setRecipeRating(rating);
        } else {
          setRecipeRating(0);
        }
      });
  }, [userReview]);

  const submitReview = (i) => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (localStorage.getItem(`r-${id}`)) {
        return;
      }

      localStorage.setItem(`r-${id}`, i + 1);
    }

    console.log(i);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://nhs-cookbook.glitch.me/recipereview", true);
    xhr.send(
      JSON.stringify({
        recipeID: id,
        review: i + 1,
      })
    );

    setUserReview(i + 1);
  };

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin-left: 22px;

          @media only screen and (max-width: 500px) {
            flex-direction: column;
            align-items: flex-start;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;

            @media only screen and (min-width: 1700px) {
              padding-left: calc((100vw - 1700px) / 2);
            }
          `}
        >
          {[0, 0, 0, 0, 0].map((e, i) => (
            <img
              src={
                userHoverReview >= 0
                  ? userHoverReview >= i
                    ? StarFilled
                    : StarEmpty
                  : Math.floor(recipeRating + 0.5) > i
                  ? StarFilled
                  : StarEmpty
              }
              css={css`
                max-height: 35px;
                margin-left: 8px;
              `}
              onClick={() => submitReview(i)}
              onMouseOver={() => setUserHoverReview(i)}
              onMouseLeave={() => setUserHoverReview(-1)}
            />
          ))}
        </div>
        <p
          css={css`
            font-size: 1rem;
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-style: italic;
            margin-left: 10px;

            @media only screen and (max-width: 500px) {
              margin-top: 5px;
            }
          `}
        >
          {recipeRating.toFixed(1)} ({totalReviews} review
          {totalReviews === 1 ? "" : "s"})
        </p>
      </div>
    </>
  );
};
