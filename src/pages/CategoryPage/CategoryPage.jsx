import { useOutletContext, useParams } from 'react-router-dom';
import './categoryPage.scss';
import { useEffect, useState } from 'react';

const Category = () => {
  const { category } = useParams();

  if (category === 'general') return <h3>General</h3>;
  else if (category === 'business') return <h3>Business</h3>;
  else if (category === 'health') return <h3>Health</h3>;
  else if (category === 'science') return <h3>Science</h3>;
  else if (category === 'sports') return <h3>Sports</h3>;
  else if (category === 'technology') return <h3>Technology</h3>;
  else return <h3>Category not found</h3>;
};

const CategoryPage = () => {
  const [query] = useOutletContext();
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=ea853e3ecde342bb9dc1f21327164c93`;

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
  }, [category]);

  return (
    <div className="categoryPage">
      <Category />
      {articles?.articles
        ?.filter((val) => {
          if (query === '') {
            return val;
          } else if (val.title.toLowerCase().includes(query.toLowerCase())) {
            return val;
          }
        })
        .map((article, i) => (
          <div className="article" key={i}>
            <div className="image">
              <img src={article.urlToImage} alt="Article image" />
            </div>
            <div className="articleHeader">
              <div className="articleTitle">
                <h4>{category}</h4>
                <h2>{article.title.slice(0, 60)}</h2>
              </div>
              <p>{article.author}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryPage;
