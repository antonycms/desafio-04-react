import React from 'react';

import './Post.css';

function PostHeader({ author, date }) {
  return (
    <div className="post-header-container">
      <img className="avatar" src={author.avatar} alt="avatar" />
      <div id="header-content">
        <span id="user-name">{author.name}</span>
        <span id="date">{date}</span>
      </div>
    </div>
  );
}

function PostResponse({ comments }) {
  return (
    <>
      <div className="divider"></div>
      {comments.map(comment => (
        <div className="post-response-container" key={comment.id}>
          <img className="avatar post-response" src={comment.author.avatar} alt="avatar" />
          <div id="response-content">
            <p>
              <strong>{comment.author.name} </strong>
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default function PostItem({ author, content, date, comments }) {
  return (
    <div className="card">
      <PostHeader author={author} date={date} />
      <p>{content}</p>
      <PostResponse comments={comments} />
    </div>
  );
}
