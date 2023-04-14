import './announcementBar.scss';

const AnnouncementBar = () => {
  return (
    <div className="announcementBar">
      <div className="announcementBarWrapper">
        <div className="announcement">
          <h3>Make MyNews your homepage</h3>
          <p>Every day discover what's trending on the internet!</p>
        </div>
        <div className="buttons">
          <div className="buttonPrimary">GET</div>
          <div className="buttonSecondary">No, thanks</div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
