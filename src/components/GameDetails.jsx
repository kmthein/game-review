import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ScaleLoader } from "react-spinners";
import { api } from "../api";
import { ActionTypes } from "../redux/actions/action-types";
import {
  isLoading,
  removeSelectedGame,
  selectGame,
} from "../redux/actions/games";

const GameDetails = () => {
  const { gameId } = useParams();

  const loading = useSelector((state) => state.gameData.isLoad);

  const dispatch = useDispatch();

  const getDetail = async () => {
    dispatch(isLoading(!loading));
    const res = await api.get(`/game/${gameId}`);
    dispatch(selectGame(res.data));
    dispatch(isLoading(loading));
  };

  useEffect(() => {
    if (gameId) {
      getDetail();
    }
    return () => {
      dispatch({ type: ActionTypes.REMOVE_SELECTED_GAME });
      dispatch(isLoading(loading));
    };
  }, [GameDetails]);

  let gameDetail = "";
  gameDetail = useSelector((state) => state.gameData.game);

  if (loading) {
    return (
      <ScaleLoader
        color="#d3d5d5"
        cssOverride={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20%",
        }}
      />
    );
  }

  return (
    <>
      {JSON.stringify(gameDetail) == "{}" ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20%",
          }}
        >
          Data Not Found
        </h1>
      ) : (
        <>
          <section className="text-gray-200 body-font">
            <div className="container mx-auto flex px-5 pt-20 items-center justify-center flex-col">
              <img
                className="lg:w-1/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src={`https://img.opencritic.com/${gameDetail.images.square.og}`}
              />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium">
                  {gameDetail.name}
                </h1>
                <h4 className="text-gray-400 mb-10">
                  {gameDetail.Genres.map((genre) => (
                    <span key={genre.id}>{genre.name} </span>
                  ))}
                </h4>
                <p className="mb-2 leading-relaxed">{gameDetail.description}</p>
              </div>
            </div>
          </section>
          <section className="body-font">
            <div className="container px-5 py-3 mx-auto flex flex-wrap">
              <h3>Screenshots</h3>
              <div className="flex flex-wrap md:-m-2 -m-1">
                {gameDetail.images.screenshots.map((src, index) => (
                  <div className="flex flex-wrap w-full mb-10" key={index}>
                    <div className="md:p-2 p-1 w-full">
                      <img
                        alt="gallery"
                        className="w-2/3 h-full object-cover object-center mx-auto block"
                        src={`https://img.opencritic.com/${src.og}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default GameDetails;
