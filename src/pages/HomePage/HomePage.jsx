import './homePage.scss';

import Article from '../../components/Article/Article';
import LatestNews from '../../components/News/latestNews';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import FavoriteArticles from '../../components/FavoriteArticles/FavoriteArticles';
import Ad from '../../components/Ad/Ad';
import BreakingNews from '../../components/BreakingNews/BreakingNews';

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

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const articlesWithAds = insertAds(data.sources);
    setArticles(articlesWithAds);
  };

  const insertAds = (articles) => {
    const adInterval = 6;
    const breakingNewsIndex = 3;
    const newArray = [...articles];

    newArray.splice(breakingNewsIndex, 0, {
      type: 'breaking-news',
    });

    for (let i = adInterval; i < newArray.length; i += adInterval) {
      newArray.splice(i, 0, { type: 'ad' });
    }

    return newArray;
  };

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
              {articles
                ?.filter((val) => {
                  if (query === '') {
                    return val;
                  } else if (
                    val.description?.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item, index) => (
                  <div key={index}>
                    {item.type === 'ad' ? (
                      <Ad />
                    ) : item.type === 'breaking-news' ? (
                      <BreakingNews />
                    ) : (
                      <Article
                        key={index}
                        article={item}
                        handleAddToFavorites={handleAddToFavorites}
                      />
                    )}
                  </div>
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

          {articles
            ?.filter((val) => {
              if (query === '') {
                return val;
              } else if (
                val.description?.toLowerCase().includes(query.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => (
              <div key={index}>
                {item.type === 'ad' ? (
                  <Ad />
                ) : item.type === 'breaking-news' ? (
                  <BreakingNews />
                ) : (
                  <Article
                    key={index}
                    article={item}
                    handleAddToFavorites={handleAddToFavorites}
                  />
                )}
              </div>
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
