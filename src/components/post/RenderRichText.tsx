import { RichText } from '@graphcms/rich-text-react-renderer';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';

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
            <div className="relative">
              <pre className="language-ts">
                <code className="">{children}</code>
              </pre>
            </div>
          );
        },
        h2: ({ children }) => {
          return <h2 className="py-4 text-3xl font-bold">{children}</h2>;
        },
        p: ({ children }) => {
          return <p className="py-1 text-base">{children}</p>;
        },
        ol: ({ children }) => {
          return <ol className="list-inside list-decimal">{children}</ol>;
        },
        li: ({ children }) => {
          return <li className="py-1 pl-2 text-base">{children}</li>;
        },
        bold: ({ children }) => {
          return (
            <span className="font-bold underline decoration-purple-800 decoration-dotted decoration-4 underline-offset-[6px]">
              {children}
            </span>
          );
        },
      }}
    />
  );
}

export default React.memo(RenderRichText);
