import React, { useState } from 'react';

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newTag = tagInput.trim();
      if (newTag !== '' && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput('');
      }
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(tags);

  };

  return (
    <div>
      <div>
        {tags.map(tag => (
          <div key={tag} className="tag">
            {tag}
            <button type="button" onClick={() => handleTagRemove(tag)}>x</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={tagInput}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Add tag..."
      />
    </div>
  );
};

export default TagInput;

