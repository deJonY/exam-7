import React from "react";
import PropTypes from "prop-types";
import "./SideMenu.css";
// import likelogo from "/like.jpg"

const SideMenu = ({
  updateHeaderTitle,
  updateViewType,
  fetchFeatured,
  // fetchRecentlyPlayed,
  fetchSongs,
  // fetchAlbums,
  // fetchArtists,
  token,
  title,
  artistIds
}) => {
  const handleClick = name => {
    updateHeaderTitle(name);
    updateViewType(name);
  };

  const handleBrowseClick = () => {
    updateHeaderTitle("Browse");
    updateViewType("Featured");
    fetchFeatured(token);
  };

  const renderSideMenu = () => {
    const menu = [
     
      {
      
        name: "Liked Songs",
        action: fetchSongs
      },
    
    ];

    return menu.map(item => {
      return (
        <li
          key={item.name}
          className={
            title === item.name ? "active side-menu-item" : "side-menu-item"
          }
          onClick={() => {
            item.getArtists
              ? item.action(token, artistIds)
              : item.action(token);
            handleClick(item.name);
          }}
        >
          {item.name}
        </li>
      );
    });
  };

  return (
    
    <ul className="side-menu-container">
      {/* <img src={likelogo} alt="" /> */}
      <li
        onClick={handleBrowseClick}
        className={
          title === "Browse" ? "active side-menu-item" : "side-menu-item"
        }
      >
        Home
      </li>
      <li className="side-menu-item radio">Search</li>
      <h3 className="user-library-header">Your Library</h3>
      {renderSideMenu()}
      <br></br>
<br></br>
    <li>Chill Mix</li>
    <br></br>
    <li>Your Top Songs 2021</li>
    <br></br>
    
    <li>Mellow Songs</li>
    <br></br>
    <li>Anime Lofi & Chillhop Music</li>
    <br></br>
    <li>Afro “Select” Vibes</li>
    <br></br>
    <li>Happy Hits!</li>
    <br></br>
    <li>Deep Focus</li>
    <br></br>
    <li>Instrumental Study</li>
    <br></br>
    <li>OST Compilations</li>
    <br></br>
    <li>Nostalgia for old souled mill...</li>
    <br></br>
    <li>Mixed Feelings</li>
    </ul>
    
  );
};

SideMenu.propTypes = {
  updateHeaderTitle: PropTypes.func,
  updateViewType: PropTypes.func,
  fetchFeatured: PropTypes.func,
  fetchRecentlyPlayed: PropTypes.func,
  fetchSongs: PropTypes.func,
  fetchAlbums: PropTypes.func,
  fetchArtists: PropTypes.func,
  token: PropTypes.string,
  artistIds: PropTypes.string,
  title: PropTypes.string
};

export default SideMenu;
