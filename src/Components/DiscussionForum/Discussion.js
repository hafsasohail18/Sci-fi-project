import React, { useState } from 'react';
import DiscussionList from '../DiscussionForum/DiscussionList';
import DiscussionForm from '../DiscussionForum/DiscussionForm';

const Discussion = () => {
  const [discussions, setDiscussions] = useState([]);

  const addDiscussion = (newDiscussion) => {
    setDiscussions([...discussions, newDiscussion]);
  };

  return (
    <div className='discussion-container'>
      <h1 className='heading-style3'>COMMUNITY FORUM</h1>
      <DiscussionForm onSubmit={addDiscussion} />
      <DiscussionList discussions={discussions} />
    </div>
  );
};

export default Discussion;
