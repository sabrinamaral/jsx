const Comment = ({ avatar, author, content, date }) => {
  return (
    <div className="ui container comments column">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={avatar} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
