/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * Header.js — The header for every page, including the navigation bar
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
 */

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Logo from "../../assets/NHS_Logo.png";
import Gap from "../components/Gap";
import NavButton from "../components/NavButton";

export default () => {
  //An array of the pages and their links for the navigation bar
  const pages = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Recipes",
      link: "/category?c=All",
    },
    {
      title: "Random",
      link: "/random",
    },
    {
      title: "Submit",
      link: "/submit",
    },
  ];

  //For mobile, the navigation bar hides the links until the "Show Navigation" button is pressed
  //This variable (pagesShown) keeps track of whether that button is pressed or not
  const [pagesShown, setPagesShown] = useState(true);
  let pageText = "Hide navigation";

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    //This is to prevent it from breaking when building without a window
    if (pagesShown) {
      for (let element of document.getElementsByClassName("nav_button")) {
        //Shows the pages when the "Show Navigation" button is pressed
        element.classList.remove("hidden");
      }
      pageText = "Hide navigation"; //Resets the text of the button, allowing the user to hide the navigation
    } else {
      for (let element of document.getElementsByClassName("nav_button")) {
        //Hides the pages when the "Hide Navigation" button is pressed
        element.classList.add("hidden");
      }
      pageText = "Show navigation"; //Resets the text of the button, allowing the user to show the navigation
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      //This is to prevent it from breaking when building without a window

      //This sets up variables to calculate whether or not the navigation bar should stick
      const navbar = document.getElementById("nav_bar");
      const ca = document.getElementById("content_area");
      const deviceWidth = navbar.clientWidth;
      const sticky = navbar.offsetTop;

      //This will hide the navigation if the page is loaded on a mobile device
      if (deviceWidth <= 500) {
        setPagesShown(false);
        for (let element of document.getElementsByClassName("nav_button")) {
          element.classList.add("hidden");
        }
        pageText = "Show navigation";
      }
    }
  }, []);

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

            @media only print {
              padding-top: 0.15in;
              padding-bottom: 0.15in;
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

                @media only print {
                  margin-right: 0.25in;
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

                @media only print {
                  margin-right: 0.25in;
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

              @media only print {
                padding-left: 0.25in;
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
      </Link>
      <div
        id="nav_bar"
        css={css`
          height: 75px;
          width: 100vw;
          background-color: var(--gold);
          display: flex;
          flex-direction: row;
          justify-content: center;

          @media only screen and (max-width: 500px) {
            flex-direction: column;
            height: auto;
            text-align: center;
          }

          @media only print {
            height: 25px;
          }
        `}
      >
        <div
          css={css`
            background-color: var(--gold);
            display: none;
            border-bottom: 6px solid var(--light);

            @media only screen and (max-width: 500px) {
              display: block;
            }
          `}
          onClick={() => setPagesShown(!pagesShown)}
        >
          <p
            css={css`
              font-family: "Inter", sans-serif;
              font-weight: 700;
              font-size: 1.25rem;
              height: 100%;
              padding: 0 50px;
              color: var(--light);
              line-height: 75px;
            `}
          >
            {pageText}
          </p>
        </div>
        {pages.map((p) => (
          <NavButton title={p.title} link={p.link} key={`header-${p.title}`} />
        ))}
      </div>
      <Gap height="50px" />
    </div>
  );
};
