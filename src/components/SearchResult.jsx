import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "flowbite-react";
import { api } from "../api";
import { searchGame } from "../redux/actions/games";

const SearchResult = () => {
  
  let finalResult = "";
    finalResult = useSelector((state) => state.gameData.searchResult)
    console.log(finalResult);
  
  return (
    <div>
      <div>
      <section className="text-gray-600 body-font home">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {finalResult.map((game, index) => (
                <div className="p-4 md:w-1/4" key={index}>
              <Link to={`/game/${game.id}`}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://img.opencritic.com/${game.images.banner.og}`}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {game.Platforms.map((platform, index) => (
                          <span key={index}>{platform.shortName} </span>
                        ))}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-100 mb-3">
                        {game.name}
                      </h1>
                    </div>
                  </div>
              </Link>
                </div>
            ))}
          </div>
        </div>
      </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SearchResult;
