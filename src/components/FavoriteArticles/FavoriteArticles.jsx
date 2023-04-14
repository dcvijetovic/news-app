import { MdDelete } from 'react-icons/md';

const FavoriteArticles = ({favorites, handleRemoveFavourite}) => {
  return (
    <div className="favoritesContainer article">
      {favorites.map((article, index)=> (

          <div className="favoriteArticle" key={index}>
            <h5>{article.description}</h5>
            <button onClick={()=>handleRemoveFavourite(article)}>
              <MdDelete />
            </button>
          </div>
      ))}
          
        </div>
  );
};

export default FavoriteArticles;
