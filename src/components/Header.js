/*
 * National Honor Society — Lexington High School — Lexington, MA
 *
 * Header.js — The header for every page, including the navigation bar
 * © 2020-2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2020-08-20
 */

import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Logo from "../../assets/NHS_Logo.png";
import Gap from "../components/Gap";

export default () => {
  return (
    <div>
      <Link
        to="/"
        css={css`
          text-decoration: none;
        `}
      >
        <div
          css={css`
            width: 100vw;
            height: 120px;
            background-color: var(--dark-red);
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            z-index: 950;

            @media only screen and (max-width: 500px) {
              flex-direction: column-reverse;
              justify-content: center;
              align-items: center;
              height: 250px;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              padding-right: 30px;
              height: 100%;
              text-align: right;

              @media only screen and (max-width: 500px) {
                justify-content: center;
                align-items: center;
                padding-right: 0;
                margin-right: 30px;
                margin-left: 30px;
                text-align: center;
              }
            `}
          >
            <p
              css={css`
                font-family: "Playfair Display", serif;
                font-size: 2.8rem;
                margin: 0;
                color: var(--light);
                font-weight: 700;
                z-index: 999;

                @media only screen and (max-width: 500px) {
                  font-size: 1.6rem;
                }
              `}
            >
              NHS Cookbook
            </p>
            <p
              css={css`
                font-family: "Playfair Display SC", serif;
                font-size: 1rem;
                margin: 0;
                color: var(--light);
                font-weight: 700;
                margin-top: -20px;
                z-index: 999;

                @media only screen and (max-width: 500px) {
                  margin-top: 8px;
                  margin-bottom: 30px;
                }
              `}
            >
              National Honor Society — Lexington, MA
            </p>
          </div>
          <img
            src={Logo}
            css={css`
              height: 80px;
              margin-left: 30px;
              z-index: 999;

              @media only screen and (max-width: 500px) {
                margin-left: 0;
                margin-top: 30px;
              }
            `}
            alt="National Honor Society logo"
          />
        </div>
        <div
          css={css`
            height: 1500px;
            margin-top: -1500px;
            width: 110vw;
            background-color: var(--dark-red);
            display: flex;
            flex-direction: row;
            justify-content: center;
            transform-origin: 0 0;
            /* transform: rotate(2deg); */
            z-index: -999;

            @media only screen and (max-width: 500px) {
              display: none;
            }
          `}
        />
        <div
          css={css`
            height: 20px;
            width: 110vw;
            background-color: var(--gold);
            display: flex;
            flex-direction: row;
            justify-content: center;
            transform-origin: 0 0;
            /* transform: rotate(2deg); */

            @media only screen and (max-width: 500px) {
              transform: none;
              margin-bottom: -60px;
            }
          `}
        />
      </Link>
      <Gap height="50px"/>
    </div>
  );
};
