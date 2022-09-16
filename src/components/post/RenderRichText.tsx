import { RichText } from '@graphcms/rich-text-react-renderer';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';

function RenderRichText({ raw }: { raw: any }) {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight(); // <--- call the async function
  }, [raw]); // <--- run when post updates

  return (
    <RichText
      content={raw}
      renderers={{
        code_block: ({ children }) => {
          return (
            <pre className="line-numbers language-ts text-lg">
              <code className="">{children}</code>
            </pre>
          );
        },
        h2: ({ children }) => {
          return (
            <h2 className="text-3xl font-bold leading-loose">{children}</h2>
          );
        },
        p: ({ children }) => {
          return <p className="text-base leading-normal">{children}</p>;
        },
      }}
    />
  );
}

export default React.memo(RenderRichText);
