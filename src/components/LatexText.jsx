import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const LatexText = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
            return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

export default LatexText;