import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={80}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" filter="url(#b)">
      <path
        d="M15.042 24c-1.022 0-1.915-.225-2.678-.676a5.026 5.026 0 0 1-1.794-1.872c-.416-.78-.624-1.647-.624-2.6V8.53H4.642V5.8h13.702v2.73H13.04v10.712c0 .555.191 1.031.572 1.43.382.399.867.598 1.456.598h1.248V24h-1.274Zm4.307 0v-7.93a5.56 5.56 0 0 1 .728-2.808c.485-.867 1.187-1.551 2.106-2.054.918-.52 2.019-.78 3.302-.78.624 0 1.222.078 1.794.234.572.156 1.1.407 1.586.754.502.33.927.745 1.274 1.248h.026a4.747 4.747 0 0 1 1.248-1.248 5.261 5.261 0 0 1 1.612-.754 7.082 7.082 0 0 1 1.82-.234c1.3 0 2.4.26 3.302.78.918.503 1.62 1.187 2.106 2.054a5.56 5.56 0 0 1 .728 2.808V24h-2.964v-7.93c0-.572-.148-1.092-.442-1.56a3.14 3.14 0 0 0-1.118-1.118c-.468-.277-1.006-.416-1.612-.416-.59 0-1.127.139-1.612.416-.486.277-.876.65-1.17 1.118a3.003 3.003 0 0 0-.416 1.56V24h-2.964v-7.93c0-.572-.148-1.092-.442-1.56a3.289 3.289 0 0 0-1.17-1.118 3.052 3.052 0 0 0-1.586-.416c-.59 0-1.127.139-1.612.416a3.36 3.36 0 0 0-1.144 1.118 3.003 3.003 0 0 0-.416 1.56V24h-2.964Zm31.999.312c-1.352 0-2.548-.286-3.588-.858a6.14 6.14 0 0 1-2.444-2.444c-.572-1.075-.858-2.34-.858-3.796V5.02h2.99v7.722h.026a4.3 4.3 0 0 1 1.092-1.222c.45-.347.953-.615 1.508-.806a5.4 5.4 0 0 1 1.768-.286c1.265 0 2.374.286 3.328.858a5.77 5.77 0 0 1 2.262 2.34c.554 1.005.832 2.184.832 3.536 0 1.057-.165 2.028-.494 2.912a6.408 6.408 0 0 1-1.378 2.262 5.93 5.93 0 0 1-2.158 1.482c-.85.33-1.812.494-2.886.494Zm0-2.548c.762 0 1.438-.182 2.028-.546a3.886 3.886 0 0 0 1.378-1.56c.329-.659.494-1.421.494-2.288 0-.85-.165-1.603-.494-2.262a3.886 3.886 0 0 0-1.378-1.56c-.572-.381-1.24-.572-2.002-.572-.763 0-1.44.19-2.028.572a3.702 3.702 0 0 0-1.378 1.534c-.33.659-.494 1.421-.494 2.288 0 .867.164 1.63.494 2.288.329.659.788 1.179 1.378 1.56.589.364 1.256.546 2.002.546Zm11.745 7.514V26.73h6.656c.45 0 .797-.139 1.04-.416.26-.277.39-.624.39-1.04v-3.432h-.026a8.148 8.148 0 0 1-1.222 1.222c-.433.33-.927.59-1.482.78a5.825 5.825 0 0 1-1.794.26c-1.213 0-2.297-.286-3.25-.858-.953-.572-1.708-1.37-2.262-2.392-.538-1.04-.806-2.227-.806-3.562 0-1.3.268-2.461.806-3.484a6.234 6.234 0 0 1 2.366-2.47c1.022-.607 2.27-.91 3.744-.91 1.404 0 2.617.295 3.64.884a6.1 6.1 0 0 1 2.418 2.496c.572 1.057.858 2.297.858 3.718v7.878c0 1.196-.347 2.14-1.04 2.834-.694.693-1.638 1.04-2.834 1.04h-7.202Zm4.134-7.722c.797 0 1.482-.182 2.054-.546a3.78 3.78 0 0 0 1.352-1.508c.33-.641.494-1.352.494-2.132 0-.832-.156-1.577-.468-2.236a3.704 3.704 0 0 0-1.352-1.56c-.572-.399-1.266-.598-2.08-.598-.797 0-1.49.2-2.08.598a3.769 3.769 0 0 0-1.326 1.56c-.312.641-.468 1.37-.468 2.184 0 .78.156 1.49.468 2.132a3.805 3.805 0 0 0 1.326 1.534c.59.381 1.282.572 2.08.572Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h80v30H0z" />
      </clipPath>
      <filter
        id="b"
        x={-4}
        y={0}
        width={88}
        height={38}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_7" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_7"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgComponent;
