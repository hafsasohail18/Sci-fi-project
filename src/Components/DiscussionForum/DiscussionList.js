import React from 'react';
import '../DiscussionForum/Discussion.css'

const DiscussionList = ({ discussions }) => {
  return (
    <div>
      <h2 className='create-heading'>Discussions</h2>
      <ul className="discussion-list">
        {discussions.map((discussion, index) => (
          <li key={index}>
            <h3>{discussion.title}</h3>
            <p>{discussion.content}</p>
            <p>Author: {discussion.author}</p>
            <p>Date: {discussion.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionList;
