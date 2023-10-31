// ToggleSection.jsx
import React, { useState } from 'react';

const ToggleSection = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`${title.toLowerCase()}-section`}>
      <h4 onClick={() => setIsVisible(!isVisible)}>{title}</h4>
      {isVisible && children}
    </div>
  );
}

export default ToggleSection;
