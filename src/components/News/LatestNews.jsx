import './latestNews.scss';

import { Arrow } from '../../assets/icons/icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';

const LatestNews = () => {
  const [news, setNews] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=ea853e3ecde342bb9dc1f21327164c93`;

  const fetchNews = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="latestNews">
      <div className="latestNewsTitle">
        <div className="dot">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
        <h3>Latest news</h3>
      </div>

      <div className="newsScroll">
        {news?.articles?.map((n, i) => (
          <div className="news" key={i}>
            <h5>{moment(n.publishedAt).format('LT')}</h5>
            <p>{n.title}</p>
          </div>
        ))}
      </div>
      <Link to="/">
        See all news <Arrow />
      </Link>
    </div>
  );
};

export default LatestNews;
