export const BgStarTopRight = () => {
  return (
    <svg
      width="146"
      height="141"
      viewBox="0 0 146 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_299_11)">
        <path
          d="M6 2C45.0395 42.1711 56.9857 41.9286 95.3947 9.92105C68.2368 42.7368 55.9868 47.5093 139.526 131C55.9868 47.5093 38.2007 66.3475 17.3158 91.3947C38.2007 66.3475 46.1711 47.2632 6 2Z"
          stroke="url(#paint0_linear_299_11)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8 8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_299_11"
          x="0.5"
          y="0.5"
          width="144.526"
          height="140"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_299_11"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_299_11"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_299_11"
          x1="76.8717"
          y1="5.76393"
          x2="76.8717"
          y2="131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A67CFF" />
          <stop offset="1" stopColor="#00FFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
