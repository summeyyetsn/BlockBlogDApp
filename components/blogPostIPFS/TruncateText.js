import React from "react";

const TruncateText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  }

  const truncatedText = text.substring(0, maxLength) + "...";

  return <div dangerouslySetInnerHTML={{ __html: truncatedText }} />;
};

export default TruncateText;
