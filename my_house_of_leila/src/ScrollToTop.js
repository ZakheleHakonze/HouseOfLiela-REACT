import React, { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTop;
