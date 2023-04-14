import './article.scss';
import image1 from '../../assets/1.png';
import { AiFillStar } from 'react-icons/ai';

const Article = ({ article, handleAddToFavorites }) => {
  return (
    <div className="article">
      <button
        className="favoriteButton"
        onClick={() => handleAddToFavorites(article)}
      >
        <AiFillStar />
      </button>
      <div className="image">
        <img src={image1} alt="Article image" />
      </div>
      <div className="articleHeader">
        <div className="articleTitle">
          <h4>{article.category}</h4>
          <h2>{article?.description?.slice(0, 60)}</h2>
        </div>
        <p>{article.name}</p>
      </div>
    </div>
  );
};

export default Article;
