import React, { useState } from 'react';

const DiscussionForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, author, date: new Date().toLocaleString() });
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="discussion-form">
      <h3 className='create-heading'>Create Discussion</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Discussion Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="create-button">
          Create
        </button>
      </form>
    </div>
  );
};

export default DiscussionForm;
