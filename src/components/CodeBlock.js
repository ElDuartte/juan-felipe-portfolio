import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // or another theme

// Optional: load language syntax
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";

const CodeBlock = ({ language, code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
