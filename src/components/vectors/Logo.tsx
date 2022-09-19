import { SVGProps } from 'react';

const TmbgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={140}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" filter="url(#b)">
      <path fill="none" d="M4 0h140v40H4z" />
      <path
        d="M40.578 6.201v4.687h-9.16V36h-5.46V10.888h-9.16V6.201h23.78Zm15.134 17.974c0-2.35-.3-4.042-.903-5.074-.573-1.06-1.662-1.591-3.268-1.591-.573 0-1.204.043-1.892.129-.688.086-1.204.158-1.548.215V36h-5.203V14.242c1.004-.287 2.308-.559 3.913-.817a33.073 33.073 0 0 1 5.16-.387c1.548 0 2.81.2 3.784.602 1.004.401 1.835.932 2.494 1.591.316-.23.717-.473 1.204-.731a10.771 10.771 0 0 1 1.634-.688 13.16 13.16 0 0 1 1.892-.559 10.098 10.098 0 0 1 2.064-.215c1.75 0 3.182.258 4.3.774 1.147.487 2.036 1.19 2.666 2.107.66.889 1.104 1.978 1.333 3.268.258 1.261.387 2.652.387 4.171V36h-5.203V24.175c0-2.35-.286-4.042-.86-5.074-.573-1.06-1.677-1.591-3.31-1.591a6.53 6.53 0 0 0-2.366.43c-.745.258-1.304.516-1.677.774.23.717.387 1.476.473 2.279.086.803.13 1.663.13 2.58V36h-5.204V24.175Zm39.313.516c0-2.207-.445-3.956-1.334-5.246-.86-1.29-2.236-1.935-4.127-1.935a7.7 7.7 0 0 0-2.451.387c-.746.258-1.348.545-1.806.86V31.7c.372.086.845.172 1.418.258.603.057 1.32.086 2.15.086 1.921 0 3.426-.645 4.516-1.935 1.089-1.319 1.633-3.125 1.633-5.418Zm5.331.086c0 1.806-.272 3.44-.816 4.902-.517 1.433-1.276 2.666-2.28 3.698-.974 1.032-2.164 1.82-3.569 2.365-1.404.545-2.995.817-4.773.817-1.72 0-3.368-.129-4.945-.387-1.547-.258-2.838-.545-3.87-.86V3.492l5.204-.86v11.653c.602-.315 1.332-.602 2.192-.86.89-.258 1.864-.387 2.925-.387 1.576 0 2.98.287 4.213.86a8.068 8.068 0 0 1 3.14 2.365c.83 1.032 1.462 2.279 1.891 3.741.459 1.433.688 3.024.688 4.773Zm19.553-14.491c-3.068 0-5.418.96-7.052 2.881-1.606 1.892-2.408 4.53-2.408 7.912 0 1.605.186 3.082.559 4.429.401 1.319.974 2.451 1.72 3.397a8.338 8.338 0 0 0 2.838 2.236c1.146.516 2.479.774 3.999.774.946 0 1.763-.029 2.451-.086.688-.086 1.232-.186 1.634-.301V20.821h5.418V35.14c-.746.287-2.007.602-3.784.946-1.778.344-3.827.516-6.149.516-2.15 0-4.114-.344-5.891-1.032-1.778-.688-3.297-1.691-4.558-3.01-1.233-1.319-2.193-2.938-2.881-4.859-.688-1.92-1.032-4.128-1.032-6.622 0-2.494.372-4.701 1.118-6.622.774-1.92 1.82-3.54 3.139-4.859a12.962 12.962 0 0 1 4.644-3.053c1.777-.688 3.669-1.032 5.676-1.032 1.376 0 2.594.1 3.655.301 1.089.172 2.021.373 2.795.602.774.23 1.404.473 1.892.731.516.258.874.444 1.075.559l-1.634 4.429c-.86-.516-1.935-.946-3.225-1.29a14.049 14.049 0 0 0-3.999-.559Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="none" transform="translate(4)" d="M0 0h140v40H0z" />
      </clipPath>
      <filter
        id="b"
        x={0}
        y={0}
        width={140}
        height={40}
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

export default TmbgLogo;