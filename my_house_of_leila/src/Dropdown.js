import React, { useState, useEffect } from 'react';

const useDropdown = (blockClassNames, contentClassNames) => {
  useEffect(() => {
    const toggleContent = (content) => {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    };

    const blocks = document.querySelectorAll(`.${blockClassNames.join(', .')}`);
    const contents = document.querySelectorAll(`.${contentClassNames.join(', .')}`);

    const toggleContentForBlock = (index) => {
      const content = contents[index];
      toggleContent(content);
    };

    blocks.forEach((block, index) => {
      block.addEventListener('click', () => toggleContentForBlock(index));
    });

    return () => {
      blocks.forEach((block, index) => {
        block.removeEventListener('click', () => toggleContentForBlock(index));
      });
    };
  }, [blockClassNames, contentClassNames]);
};

const Dropdown = ({ blockClassNames, contentClassNames }) => {
  useDropdown(blockClassNames, contentClassNames);

  return (
    <div className={blockClassNames.join(' ')}>
      <div className={contentClassNames.join(' ')}>Content</div>
    </div>
  );
};

export default Dropdown;


