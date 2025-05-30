function Logo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" {...props}>
      <title>Logo.</title>
      <defs>
        <linearGradient id="logo_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DA1A32" />
          <stop offset="100%" stopColor="#6D0D19" />
        </linearGradient>
        <linearGradient id="logo_svg__b" x1="50%" x2="50%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#DA1A32" />
          <stop offset="0%" stopColor="#DA1A32" />
          <stop offset="100%" stopColor="#6D0D19" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx={540} cy={540} r={468} fill="url(#logo_svg__a)" />
        <path
          fill="url(#logo_svg__b)"
          d="M540 150c215.391 0 390 174.609 390 390S755.391 930 540 930 150 755.391 150 540s174.609-390 390-390m0 39c-193.852 0-351 157.148-351 351s157.148 351 351 351 351-157.148 351-351-157.148-351-351-351"
        />
        <g fillRule="nonzero">
          <path d="M300 300h480v480H300z" />
          <path
            fill="#FFF"
            d="m643.934 399.985.054.093C697.368 402.171 740 446.107 740 500c0 41.006-24.682 76.248-60 91.68V620H400v-28.32c-35.318-15.432-60-50.674-60-91.68 0-53.892 42.63-97.827 96.009-99.922C456.746 364.167 495.55 340 540 340c44.442 0 83.216 24.17 103.934 59.985M400 660v40c0 22.092 17.909 40 40 40h200c22.092 0 40-17.908 40-40v-40z"
          />
        </g>
      </g>
    </svg>
  );
}

export default Logo;
