import "./styles.css";
import React, { useState } from "react";

const animeData = {
  Action: [
    {
      name: "One Punch Man",
      season: "Total Season: 2",
      image:
        "https://staticg.sportskeeda.com/editor/2022/04/8e856-16505616347217-1920.jpg",
      rating: "Rating: 8.5/10"
    },
    {
      name: "Attack On Titan",
      season: "Total Season: 4",
      image:
        "https://3.bp.blogspot.com/-Rhh0q89MTuM/XSRKIJdMptI/AAAAAAAAAjs/tEP-R54BT8oJ1J1uuXG7k3P_yHYsqoNzwCKgBGAs/w0/attack-titan-attack-on-titan-uhdpaper.com-4K-172.jpg",
      rating: "Rating: 10/10"
    }
  ],
  Thriller: [
    {
      name: "Hunter x Hunter",
      season: "Total Season: 1",
      image: "https://images3.alphacoders.com/228/228205.jpg",
      rating: "Rating: 9.1/10"
    },
    {
      name: "Monster",
      season: "Total Season: 1",
      image:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Featured-Image-Johan-and-Schuwald-Cropped.jpg",
      rating: "Rating: 9.2/10"
    }
  ],
  Drama: [
    {
      name: "Code Geass",
      season: "Total Season: 2",
      image:
        "https://animemotivation.com/wp-content/uploads/2019/02/code-geass-suzaku-and-lelouch-wallpaper.jpg",
      rating: "Rating: 8.5/10"
    },
    {
      name: "Death Note",
      season: "Total Season: 1",
      image:
        "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/01/Death-Note-Light-L-and-Ryuk-Cropped-compressed.jpg?fit=1400%2C700&amp;ssl=1",
      rating: "Rating: 9/10"
    }
  ],
  Romance: [
    {
      name: "Your Name",
      season: "Total Season: 1",
      image: "https://i.ytimg.com/vi/xU47nhruN-Q/maxresdefault.jpg",
      rating: "Rating: 10/10"
    },
    {
      name: "Anohana",
      season: "Total Season: 1",
      image:
        "https://www.thestreambible.com/wp-content/uploads/2022/02/anohona-F-758x426.jpg",
      rating: "Rating: 8.4/10"
    }
  ]
};

var newAnimeData = Object.keys(animeData);

export default function App() {
  const [animeGenre, setAnimeGenre] = useState("Action");

  function genreClickHandler(genre) {
    setAnimeGenre(genre);
  }

  return (
    <div className="App">
      <header className="anime-header">
        <h1 className="header-heading">Anime Recommendation App</h1>
        <div className="header-div">
          Here are some of the Anime Recommendation.{" "}
        </div>
      </header>

      <div>
        <ul className="genre-list">
          {newAnimeData.map((animeName) => (
            <li
              key={animeName}
              style={{ cursor: "pointer" }}
              onClick={() => genreClickHandler(animeName)}
              className="genre-items"
            >
              {animeName}
            </li>
          ))}
        </ul>
      </div>
      <div id="bottom-suggest">
        <ul id="suggest-list">
          {animeData[animeGenre].map((anime) => (
            <li key={anime.name} className="suggest-items">
              {" "}
              <div>
                <img className="anime-img" alt="" src={anime.image} />
              </div>
              <div className="lower-items anime-name-list">{anime.name}</div>
              <div className="lower-items">{anime.season}</div>
              <div className="lower-items">{anime.rating}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <div id="footer-div">
          Recommended by{" "}
          <a href="https://abhisek-panda.netlify.app" id="footer-link">
            Abhisek
          </a>
        </div>
      </footer>
    </div>
  );
}
