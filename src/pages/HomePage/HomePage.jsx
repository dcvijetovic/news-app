import './homePage.scss';

import Article from '../../components/Article/Article';
import LatestNews from '../../components/News/latestNews';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import FavoriteArticles from '../../components/FavoriteArticles/FavoriteArticles';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
};

const HomePage = () => {
  const [query] = useOutletContext();
  const [articles, setArticles] = useState([]);
  const [open, setOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [button, setButton] = useState('featured');

  const isMobile = useWindowWidth() <= 700;

  const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=ea853e3ecde342bb9dc1f21327164c93`;

  const fetchArticles = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleAddToFavorites = (article) => {
    setFavorites((prevFavorites) => [...prevFavorites, article]);
  };

  const handleRemoveFavourite = (articleToRemove) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(
        (article) => article.description !== articleToRemove.description
      )
    );
  };

  const HomePageScreen = () => {
    if (isMobile) {
      {
        if (button === 'featured') {
          return (
            <>
              <div className="favorites" onClick={() => setOpen(!open)}>
                <AiFillStar /> Favorites
              </div>
              {open ? (
                <FavoriteArticles
                  favorites={favorites}
                  handleRemoveFavourite={handleRemoveFavourite}
                />
              ) : (
                ''
              )}
              {articles?.sources
                ?.filter((val) => {
                  if (query === '') {
                    return val;
                  } else if (
                    val.description.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((article, index) => (
                  <Article
                    key={index}
                    article={article}
                    handleAddToFavorites={handleAddToFavorites}
                  />
                ))}
            </>
          );
        } else if (button === 'latest') {
          return <LatestNews />;
        }
      }
    } else {
      return (
        <>
          <h3>News</h3>
          <div className="favorites" onClick={() => setOpen(!open)}>
            <AiFillStar /> Favorites
          </div>
          {open ? (
            <FavoriteArticles
              favorites={favorites}
              handleRemoveFavourite={handleRemoveFavourite}
            />
          ) : (
            ''
          )}

          <LatestNews />

          {articles?.sources
            ?.filter((val) => {
              if (query === '') {
                return val;
              } else if (
                val.description.toLowerCase().includes(query.toLowerCase())
              ) {
                return val;
              }
            })
            .map((article, index) => (
              <Article
                key={index}
                article={article}
                handleAddToFavorites={handleAddToFavorites}
              />
            ))}
        </>
      );
    }
  };

  return (
    <>
      <div className="homePage">
        <div className="buttons">
          <button
            onClick={() => setButton('featured')}
            className={button === 'featured' ? 'activeBtn' : ''}
          >
            Featured
          </button>
          <button
            onClick={() => setButton('latest')}
            className={button === 'latest' ? 'activeBtn' : ''}
          >
            Latest
          </button>
        </div>

        {HomePageScreen()}
      </div>
    </>
  );
};

export default HomePage;
