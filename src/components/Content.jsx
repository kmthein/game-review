import React from "react";
import { Link } from "react-router-dom";

const Content = ({ homeGame }) => {
  return (
    <>
      <section className="text-gray-600 body-font home">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {homeGame.map((game, index) => (
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
    </>
  );
};

export default Content;
