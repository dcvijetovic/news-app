import image1 from '../../assets/1.png';
import '../Article/article.scss'

const Ad = () => {
  return (
    <div className="article">
      <div className="adBadge">AD</div>
      <div className="image">
        <img src={image1} alt="Article image" />
      </div>
      <div className="articleHeader">
        <div className="articleTitle">
          <h4>Programmatic/Native Ad</h4>
          <h2>Compare Prices Find the Best Computes Accessory</h2>
        </div>
        <p>Garry Webber</p>
      </div>
    </div>
  );
};

export default Ad;
