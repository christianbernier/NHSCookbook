/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * LinkButton.js — A button for a link, either internal or external
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
 */

import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import BackIcon from "../../assets/back_icon.png";
import LinkIconLight from "../../assets/link_icon_light.png";

/*
 * text (string) - The text to be displayed in the box
 * type (string) - The type of link (either internal or external) for more efficient linking (<a> for external; <Link> for internal)
 * special (string) - Any specially programmed parameters (ex. "home")
 * link (string) - The URL of the link
 */

export default ({ text, type, special, link }) => {
  if (type === "internal") {
    return (
      <Link
        to={link}
        css={css`
          text-decoration: none;
          margin-right: ${special === "home" ? "25px" : ""};

          @media only screen and (min-width: 1700px) {
            margin-right: ${special === "home"
              ? "calc(((100vw - 1700px) / 2) + 15px)"
              : ""};
          }

          @media only print {
            display: none;
          }
        `}
      >
        <div
          css={css`
            width: ${special === "skinny" || special === "home"
              ? "auto"
              : "calc(100vw - 40px)"};
            padding: 15px;
            display: ${special === "skinny" || special === "home"
              ? "inline-block"
              : "flex"};
            align-items: flex-start;
            justify-content: center;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              /* background-color: var(--light-gray); */
              background-color: var(--dark-red);
              padding: 0 40px;
              border-radius: 5px;
            `}
          >
            <img
              src={special === "home" ? BackIcon : LinkIconLight}
              css={css`
                width: 20px;
                height: 20px;
                margin-right: 10px;
              `}
              alt="Link icon"
            />
            <p
              css={css`
                font-size: 1.2rem;
                /* color: var(--font-color); */
                color: var(--light);
                font-family: "Inter", sans-serif;
                font-weight: 600;
                margin: 20px 0;
              `}
            >
              {text}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <a
      href={link}
      css={css`
        text-decoration: none;
      `}
    >
      <div
        css={css`
          width: ${special === "skinny" ? "auto" : "calc(100vw - 40px)"};
          padding: 15px;
          display: ${special === "skinny" ? "inline-block" : "flex"};
          align-items: flex-start;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            /* background-color: var(--light-gray); */
            background-color: var(--dark-red);
            padding: 0 40px;
            border-radius: 5px;
          `}
        >
          <img
            src={LinkIconLight}
            css={css`
              width: 20px;
              height: 20px;
              margin-right: 10px;
            `}
            alt="Link icon"
          />
          <p
            css={css`
              font-size: 1.2rem;
              /* color: var(--font-color); */
              color: var(--light);
              font-family: "Inter", sans-serif;
              font-weight: 600;
              margin: 20px 0;
            `}
          >
            {text}
          </p>
        </div>
      </div>
    </a>
  );
};
