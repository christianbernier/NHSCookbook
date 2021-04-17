/*
 * National Honor Society Cookbook — Lexington High School — Lexington, MA
 *
 * SearchBar.js — The search bar on the homepage
 * © 2021 to National Honor Society Lexington, MA Charter
 *
 * Created by Christian Bernier on 2021-03-02
 */

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import SearchIcon from "../../assets/search_icon.png";
import DownArrow from "../../assets/down_arrow.png";
import UpArrow from "../../assets/up_arrow.png";

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [showCategories, setShowCategories] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
  };

  const categories = [
    {
      name: "All Categories",
      text: "",
    },
    {
      name: "Appetizers",
      text: "Appetizer",
    },
    {
      name: "Breads",
      text: "Bread",
    },
    {
      name: "Breakfast",
      text: "Breakfast",
    },
    {
      name: "Entrées",
      text: "Entrée",
    },
    {
      name: "Sandwiches",
      text: "Sandwich",
    },
    {
      name: "Soups",
      text: "Soup",
    },
    {
      name: "Desserts",
      text: "Dessert",
    },
    {
      name: "Snacks",
      text: "Snack",
    },
  ];

  useEffect(() => {
    let allRecipes = [];

    fetch(
      "https://spreadsheets.google.com/feeds/list/1IyOdIiRpaPV73GQkpmnnnQMKqalSRt7fTSHNPAZffIk/1/public/full?alt=json"
    )
      .then((data) => data.json())
      .then((data) => {
        for (const entry of data.feed.entry) {
          if (entry["gsx$display"]["$t"] === "TRUE") {
            allRecipes.push({
              title: entry["gsx$title"]["$t"],
              id: entry["gsx$id"]["$t"],
              category: entry["gsx$category"]["$t"],
              description: entry["gsx$description"]["$t"],
              ingredients: entry["gsx$ingredients"]["$t"],
              appliancestools: entry["gsx$appliancestools"]["$t"],
              directions: entry["gsx$directions"]["$t"],
              timeneeded: entry["gsx$timeneeded"]["$t"],
              difficulty: entry["gsx$difficulty"]["$t"],
              pictures: entry["gsx$pictures"]["$t"],
            });
          }
        }

        setRecipes(allRecipes);
      });
  }, []);

  useEffect(() => {
    if(showCategories){
      setSearchResults([]);
    } else{
      searchChanged();
    }
  }, [showCategories]);

  const searchChanged = () => {
    const query = document.getElementById("search-field").value;
    if (query.length < 3) {
      setSearchResults([]);
      return;
    }
    let validResults = [];
    for (const recipe of recipes) {
      if (recipe.title.toLowerCase().indexOf(query.toLowerCase()) === -1) {
        continue;
      }
      if (recipe.category.indexOf(categories[selectedCategory].text) === -1) {
        continue;
      }
      validResults.push(recipe);
    }
    setSearchResults(validResults);
  };


  return (
    <>
      <div
        css={css`
          width: 100%;
          display: flex;
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
            background-color: var(--light-gray);
            padding-left: 40px;
            border-radius: 5px;
            width: 100%;

            ${searchResults.length > 0
              ? "border-bottom-left-radius: 0; border-bottom-right-radius: 0;"
              : ""}
          `}
        >
          <img
            src={SearchIcon}
            css={css`
              width: 20px;
              height: 20px;
              margin-right: 10px;
            `}
            alt="Serach icon"
          />
          <input
            id="search-field"
            css={css`
              font-size: 1.2rem;
              color: var(--font-color);
              font-family: "Inter", sans-serif;
              font-weight: 600;
              margin: 20px 0;
              width: 100%;
              height: 100%;
              background-color: var(--light-gray);
              outline: none;
              border: none;
            `}
            placeholder="Search for recipes"
            onChange={() => searchChanged()}
          />
          <div
            css={css`
              background-color: var(--dark-gray);
              width: 250px;
              height: 66px;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
            `}
            onClick={() => setShowCategories(!showCategories)}
          >
            <img
              src={(showCategories) ? UpArrow : DownArrow}
              css={css`
                width: 20px;
                height: 13px;
                margin: 0 10px;
              `}
              alt="Dropdown icon"
            />
            <p
              css={css`
                font-size: 1.2rem;
                color: var(--font-color);
                font-family: "Inter", sans-serif;
                font-weight: 600;
              `}
            >
              {categories[selectedCategory].name}
            </p>
          </div>
        </div>
      </div>
      {showCategories ? (
        <div
          css={css`
            max-height: 250px;
            overflow-y: scroll;

            ::-webkit-scrollbar {
              width: 10px;
            }

            ::-webkit-scrollbar-track {
              background: var(--light-gray);
              border-bottom-right-radius: 5px;
            }

            ::-webkit-scrollbar-thumb {
              background: var(--darker-gray);
            }

            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            border-top: 2px solid var(--darker-gray);
          `}
        >
          {categories.map((c, i) => (
            <div
              css={css`
                overflow: hidden;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
              `}
              onClick={() => selectCategory(i)}
            >
              <div
                key={`category-${i}`}
                css={css`
                  width: 25%;
                  background-color: var(--light-gray);
                  padding: 20px 40px;
                  border-top: 2px solid var(--dark-gray);
                `}
              >
                <p
                  css={css`
                    font-size: 1.2rem;
                    color: var(--font-color);
                    font-family: "Inter", sans-serif;
                    font-weight: 600;
                  `}
                >
                  {c.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <div
        css={css`
          max-height: 250px;
          overflow-y: scroll;

          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: var(--light-gray);
            border-bottom-right-radius: 5px;
          }

          ::-webkit-scrollbar-thumb {
            background: var(--darker-gray);
          }

          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;

          border-top: 2px solid
            ${searchResults.length > 0 ? "var(--darker-gray)" : "transparent"};
        `}
      >
        {searchResults.map((r) => (
          <div
            css={css`
              overflow: hidden;
            `}
          >
            <Link
              to={`/recipe?id=${r.id}`}
              css={css`
                text-decoration: none;
              `}
            >
              <div
                className="selection"
                key={`recipe-search-result-${r.id}`}
                css={css`
                  width: calc(100% - 80px);
                  background-color: var(--light-gray);
                  padding: 20px 40px;
                  border-top: 2px solid var(--dark-gray);
                `}
              >
                <p
                  css={css`
                    font-size: 1.2rem;
                    color: var(--font-color);
                    font-family: "Inter", sans-serif;
                    font-weight: 600;
                  `}
                >
                  {r.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
