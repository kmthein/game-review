import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { IoLogoGameControllerB } from 'react-icons/io';
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt } from 'react-icons/bi';
import { api } from '../api/index';
import { useDispatch, useSelector } from "react-redux";
import { fetchGame, getId, searchGame } from "../redux/actions/games";

const Header = () => {
  const [name, setName] = useState("");

  const [id, setId] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const searchSubmit = async(e) => {
    e.preventDefault();
    if(name != "") {
      const res = await api.get(`/meta/search`, {
        params: {criteria: name}
      })
      const data = res.data;
      data.map((did) => {
        const sid = did.id;
        id.push(sid)
      })
    let searchData = [];
      const searchApi = async() => {
        for(let i = 0; i < id.length - 1; i++){
          const res = await api.get(`/game/${id[i]}`);
          searchData = [...searchData, res.data]
          setId([]);
          setName("");
          dispatch(searchGame(searchData))
          navigate('/game/search')
        }
      }
      searchApi()
      console.log(id);
      // navigate('/game/search')
    } else {
      const res = await api.get(`/game`, {
        params: { platforms: "pc", skip: 0},
      });
      dispatch(fetchGame(res.data));
      navigate('/');
    }
  }

  const sGame = useSelector((state) => state.gameData.searchId);


  return (
    <>
      <header>
        <div className="header">
          <div className="header-brand flex items-center justify-center">
          <Link to="/">
        <IoLogoGameControllerB style={{fontSize: '40px', marginLeft: '5%'}}  />
        </Link>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white" style={{marginLeft: "1%"}}>
            Game Zone
          </span>
          </div>
          <div className="flex items-center justify-center input">
          {/* <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="">Popular</Link>
            </li>
            <li>
            <Link to="">Latest</Link>
            </li>
            <li>
            <Link to="">Upcoming</Link>
            </li>
          </ul> */}
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Search..." className="header-search" />
          <BiSearchAlt className="search" onClick={searchSubmit}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
