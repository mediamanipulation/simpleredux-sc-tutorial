import React from 'react';

function ToggleSection({ title, children }) {
    const toggleSectionContent = (event) => {
        const content = event.target.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

    return (
        <>
            <h4 onClick={toggleSectionContent} className="txUl">{title}</h4>
            <div className="toggle-section-content txUl">
                {children}
            </div>
        </>
    );
}

export default ToggleSection;
