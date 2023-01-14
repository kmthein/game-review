import { Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { api, api_key } from "../api";
import { ActionTypes } from "../redux/actions/action-types";
import { fetchGame, nextPage } from "../redux/actions/games";
import Content from "./Content";
import { ScaleLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const order = useSelector(state => state.gameData.order)

  const page = useSelector(state => state.gameData.page);

  const fetchHomePage = async (order) => {
    setLoading(true);
    const res = await api.get(`/game`, {
      params: { platforms: "pc", skip: order},
    });
    dispatch(fetchGame(res.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchHomePage(0);
    dispatch({type: ActionTypes.RESET_PAGE})
  }, [order]);


  let homeGame = "";
  homeGame = useSelector((state) => state.gameData.games);

  if(loading) {
    return (
      <ScaleLoader color="#d3d5d5" cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20%'
      }}/>
    )
  }

  const pagePrev = () => {
    dispatch({type: ActionTypes.PREV_PAGE})
    if(page <= 2){
      navigate(`/`)
    } else {
      navigate(`/page/${page - 1}`)
    }
  }

  const pageNext = () => {
    dispatch({type: ActionTypes.NEXT_PAGE})
    navigate(`/page/${page + 1}`)
  }

  return (
    <div>
      {JSON.stringify(homeGame) == "[]" ? (
        <h1>Loading...</h1>
      ) : (
        <Content homeGame={homeGame} />
      )}
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        {
          page > 1 && <button onClick={pagePrev} className="m-3 text-gray-900 bg-gray-300 rounded-md" style={{width: '80px', height: '40px'}}>Previous</button>
        }
          
          <button onClick={pageNext} className="m-3 text-gray-900 bg-gray-300 rounded-md mb-20" style={{width: '80px', height: '40px'}}>Next</button>
      </div>
      
    </div>
  );
};

export default Home;
