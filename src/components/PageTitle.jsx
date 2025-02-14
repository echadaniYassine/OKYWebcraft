// components/PageTitle.js
import React, { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - OKY Webcraft`; // Set the title dynamically
  }, [title]); // Dependency array, so it updates when title changes

  return null; // This component doesn't need to render anything
};

export default PageTitle;
